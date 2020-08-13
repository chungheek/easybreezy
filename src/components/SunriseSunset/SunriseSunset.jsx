import React, {Component} from 'react';
import './SunriseSunset.scss';
import SunriseSunsetImg from '../images/sunrise-sunset.png';

export default class SunriseSunset extends Component {

  sunrise() {
    if (!this.props.sunrise) return '---';

    const sunriseDate = new Date(this.props.sunrise * 1000);
    let hh = sunriseDate.getHours();
    let mm = sunriseDate.getMinutes().toString().padStart(2, '0');
    let ampm = 'AM';
    if (hh >= 12) {hh -= 12; ampm='AM'};
    return `${hh}:${mm} ${ampm}`;
  }

  sunset() {
    if (!this.props.sunset) return '---';

    const sunsetDate = new Date(this.props.sunset * 1000);
    let hh = sunsetDate.getHours();
    let mm = sunsetDate.getMinutes().toString().padStart(2, '0');
    let ampm = 'AM';
    if (hh >= 12) {hh -= 12; ampm='PM'};
    return `${hh}:${mm} ${ampm}`;
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
