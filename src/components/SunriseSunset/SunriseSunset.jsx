import React, {Component} from 'react';
import './SunriseSunset.scss';
import SunriseSunsetImg from '../images/sunrise-sunset.png';

export default class SunriseSunset extends Component {

  sunrise() {
    return this.props.sunrise ? this.props.sunrise : '6 am';
  }

  sunset() {
      return this.props.sunset ? this.props.sunset: '6 pm';
  }

  render() {
    return (
      <div>
        <img className="sunrise-sunset-img" src={SunriseSunsetImg} alt="Sunrise and Sunset Time" />
        Sunrise: {this.sunrise()} / Sunset: {this.sunset()}<br />
      </div>
    )
  }
};
