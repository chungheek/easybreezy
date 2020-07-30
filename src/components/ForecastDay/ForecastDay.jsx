import React, { Component } from 'react';
import Temperature from '../Temperature/Temperature';
import './ForecastDay.scss';
import WeatherDescription from '../WeatherDescription/WeatherDescription'

class ForecastDay extends Component {
  render() {
  	const day = this.props.day;
  	const pad = this.props.pad;

  	var dd = String(day.getDate() + pad).padStart(2, '0');
    var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = day.getFullYear();
    var stringDay = mm + '/' + dd + '/' + yyyy;

    return(
      <div className="forecastday">
      	{stringDay}
        <Temperature temperature={this.props.temperature}/>
        <WeatherDescription weatherdescription={this.props.weatherdescription} />
      </div>
    );
  }
}

export default ForecastDay;
