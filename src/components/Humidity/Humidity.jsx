import React, {Component} from 'react';
import './Humidity.scss';
import humidity from '../images/humidity.png';

class Humidity extends Component {

  humidity() {
    return this.props.humidity ? this.props.humidity : 0;
  }

  render() {
    return (
      <div className="humid">
        <img className="humidity" src={humidity} alt="humidity" />
        Humidity: {this.humidity()}%
      </div>
    );
  }
};

export default Humidity;
