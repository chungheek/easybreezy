import React from 'react';
import './Today.scss';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';
import WeatherImage from '../WeatherImage/WeatherImage';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import Rain from '../Rain/Rain';
import Wind from '../Wind/Wind';

const Today = (props) => {

  return (
    props.humidity && (
      <div className="today-container">
        <div className="grid-item">
          Today's Forecast:
          <hr></hr>
          {props.location}, {props.country}
          <WeatherDescription weatherDescription={props.weatherDescription} />
          <WeatherImage weatherImage={props.weatherImage} />
        </div>
        <div className="grid-item">
          Weather Info:
          <hr></hr>
          <Temperature temperature={props.temperature} />
          <Humidity humidity={props.humidity} />
          <Rain rain={props.rain} />
          <Wind speed={props.speed} />
        </div>
      </div>
    )
  );
};

export default Today;
