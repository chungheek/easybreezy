import React, { Component } from 'react';
import './SunriseSunset.scss';
import SunriseSunsetImg from '../images/sunrise-sunset.png';

export default class SunriseSunset extends Component {
  sunrise() {
    if (!this.props.sunrise) return '---';

    const destTime = this.props.sunrise;
    const destZone = this.props.destTimeZone;

    // offset for the current location
    var d = new Date();
    const localZone = d.getTimezoneOffset() * -60;

    const sunriseDate = new Date((destTime - localZone + destZone) * 1000);
    let hh = sunriseDate.getHours();
    let mm = sunriseDate.getMinutes().toString().padStart(2, '0');
    let ampm = 'AM';
    if (hh >= 12) {
      hh -= 12;
      ampm = 'AM';
    }
    return `${hh}:${mm} ${ampm}`;
  }

  sunset() {
    if (!this.props.sunset) return '---';

    const destTime = this.props.sunset;
    const destZone = this.props.destTimeZone;

    // offset for the current location
    var d = new Date();
    const localZone = d.getTimezoneOffset() * -60;

    const sunsetDate = new Date((destTime - localZone + destZone) * 1000);
    let hh = sunsetDate.getHours();
    let mm = sunsetDate.getMinutes().toString().padStart(2, '0');
    let ampm = 'AM';
    if (hh >= 12) {
      hh -= 12;
      ampm = 'PM';
    }
    return `${hh}:${mm} ${ampm}`;
  }

  render() {
    return (
      <div>
        <img
          className="sunrise-sunset-img"
          src={SunriseSunsetImg}
          alt="Sunrise and Sunset Time"
        />
        Sunrise: {this.sunrise()} / Sunset: {this.sunset()}
        <br />
      </div>
    );
  }
}
