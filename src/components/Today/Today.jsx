import React from 'react';
import './Today.scss';
import temp from '../../API/temperatureApi';
import Temperature from '../Temperature/Temperature';
import WeatherDescription from '../WeatherDescription/WeatherDescription'

const Today = (props) => {
    return (
    <div className="today-container">
        <h1>Today's Forecast</h1>
        <p>New York, New York</p>
        <p>{temp.weather.main}</p>
        <WeatherDescription weatherDescription={props.weatherDescription} />
        <Temperature temperature={props.temperature} />
        <p>Feels like: {temp.main.feels_like}°</p>
    </div>
    )
};

export default Today;
