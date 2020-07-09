import React, { Component } from 'react';
import temp from '../../API/temperatureApi';
import './styles.scss';

class Temperature extends Component {
  render() {
    return(
      <div className="temp">
        Temperature: {temp.main.temp} <br />
      </div>
    );
  }
}

export default Temperature;
