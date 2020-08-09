import React from 'react';
import './Today.scss';
import temp from '../../API/temperatureApi';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';
import WeatherImage from '../WeatherImage/WeatherImage';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import Toggle from '../Toggle/Toggle';

const Today = (props) => {
  
  return (
    <div className="today-container">
      <h1>Today's Forecast</h1>
      <p>{props.location}</p>
      <WeatherDescription weatherDescription={props.weatherDescription} />
      <Temperature temperature={props.temperature} />
      <WeatherImage weatherImage={props.weatherImage} />
      <Humidity humidity={props.humidity} />
      Feels like:
      <Toggle temp={temp.main.feels_like} />
    </div>
  );
};

export default Today;
