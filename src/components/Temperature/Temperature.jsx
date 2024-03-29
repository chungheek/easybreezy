import React from 'react';
import './Temperature.scss';

const Temperature = (props) => {
  return (
    props.temperature && (
      <div>
        <div className="temp">
          {props.temperature}°
        </div>
      </div>
    )
  );
};

export default Temperature;
