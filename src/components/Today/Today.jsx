import React from 'react';
import './Today.scss';
import temp from '../../API/temperatureApi';
import Temperature from '../Temperature/Temperature';
import WeatherDescription from '../WeatherDescription/WeatherDescription'
import Toggle from '../Toggle/Toggle'

const Today = (props) => {
    return (
    <div className="today-container">
        <h1>Today's Forecast</h1>
        <p>New York, New York</p>
        <p>{temp.weather.main}</p>
        <WeatherDescription weatherdescription={props.weatherdescription} />
        <Temperature temperature={props.temperature} />
        Feels like: 
        <Toggle temp={temp.main.feels_like}/>
    </div>
    )
};

export default Today;
