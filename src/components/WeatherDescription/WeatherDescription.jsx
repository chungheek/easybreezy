import React from 'react';
import './WeatherDescription.scss';

const WeatherDescription = (props) => {
  return(
    (props.weatherdescription &&
      <div>
        <div className="weatherdescription">
          {props.weatherdescription}<br />
        </div>
      </div>
    )
  );
}

export default WeatherDescription;
