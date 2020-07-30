import React, { Component } from 'react';
import temp from '../../API/temperatureApi';
import './styles.scss';
import Toggle from '../Toggle/Toggle';

class Temperature extends Component {
  render() {
    return(
      <div className="temp"> 
      Temperature:
        <Toggle
          temp={temp.main.temp} 
          />
      </div>
      
    );
  }
}

export default Temperature;
