import React from 'react';
import './Today.scss';
import temp from '../../API/temperatureApi';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';

const Today = (props) => {
    return (
    <div className="today-container">
        <h1>Today's Forecast</h1>
        <p>{props.location}</p>
        <p>{temp.weather.main}</p>
        <Temperature temperature={props.temperature} />
        <Humidity humidity={props.humidity} />
        <p>Feels like: {temp.main.feels_like}°</p>
    </div>
    )
};

export default Today;
