import React from 'react';
import './WeatherDescription.scss';

const WeatherDescription = (props) => {
  return (
    props.weatherDescription && (
      <div>
        <div className="weatherDescription">
          {props.weatherDescription}
          <br />
        </div>
      </div>
    )
  );
};

export default WeatherDescription;
