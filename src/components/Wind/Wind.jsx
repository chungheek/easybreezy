import React from 'react';
import './Wind.scss';
import windImg from '../images/wind.png'

const Wind = (props) => {
  return (
    props.speed && (
      <div>
          <img className="wind-img" src={windImg} alt="wind" />
          Wind: {props.speed} (m/s)
          <br />
      </div>
    )
  );
};

export default Wind;
