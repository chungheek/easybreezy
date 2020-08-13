import React, { Component } from 'react';
import Temperature from '../Temperature/Temperature';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import Rain from '../Rain/Rain';
import './ForecastDay.scss';
import Humidity from '../Humidity/Humidity';
import Wind from '../Wind/Wind'
import SunriseSunset from '../SunriseSunset/SunriseSunset';

class ForecastDay extends Component {
  render() {
    const day = this.props.day;
    const pad = this.props.pad;

    var dd = String(day.getDate() + pad).padStart(2, '0');
    var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = day.getFullYear();
    var stringDay = mm + '/' + dd + '/' + yyyy;

    return (
      <div className="forecast-day">
        {stringDay}
        <WeatherDescription
          weatherDescription={this.props.weatherDescription}
        />
        <Temperature temperature={this.props.temperature} />
        <Humidity humidity={this.props.humidity} />
        <Rain rain={this.props.rain} />
        <Wind speed={this.props.speed} />
        <SunriseSunset sunrise={this.props.sunrise} sunset={this.props.sunset} />
      </div>
    );
  }
}

export default ForecastDay;
