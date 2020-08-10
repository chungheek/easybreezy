import React from 'react';
import './WeatherDescription.scss';

const WeatherDescription = (props) => {
  return (
    props.weatherDescription && (
      <div>
        <div className="weather-description">
          {props.weatherDescription}
          <br />
        </div>
      </div>
    )
  );
};

export default WeatherDescription;
