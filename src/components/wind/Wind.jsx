import React from 'react';
import './Wind.scss';

const Wind = (props) => {
  return (
    props.speed && (
      <div>
          Wind: {props.speed} (m/s)
          <br />
      </div>
    )
  );
};

export default Wind;
