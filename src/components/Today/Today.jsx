import React, { Component } from 'react';
import './Today.scss';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';
import WeatherImage from '../WeatherImage/WeatherImage';
import WeatherDescription from '../WeatherDescription/WeatherDescription';
import Rain from '../Rain/Rain';
import Wind from '../Wind/Wind';
import SunriseSunset from '../SunriseSunset/SunriseSunset';

class Today extends Component {
  render() {
    return (
      this.props.humidity && (
        <div className="today-container">
          <div className="grid-item">
            Today's Forecast:
            <hr />
            {this.props.location}, {this.props.country}
            <WeatherDescription
              weatherDescription={this.props.weatherDescription}
            />
            <WeatherImage weatherImage={this.props.weatherImage} />
          </div>
          <div className="grid-item">
            Weather Info:
            <hr />
            <Temperature temperature={this.props.temperature} />
            <Humidity humidity={this.props.humidity} />
            <Rain rain={this.props.rain} />
            <Wind speed={this.props.speed} />
            <SunriseSunset 
              sunrise = {this.props.sunriseArray[0]} 
              sunset = {this.props.sunsetArray[0]} 
              destTimeZone = {this.props.destTimeZone} 
            />
          </div>
        </div>
      )
    );
  }
}

export default Today;
