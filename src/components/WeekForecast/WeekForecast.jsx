import React, { Component } from 'react';
//import Temperature from '../Temperature/Temperature';
import ForecastDay from '../ForecastDay/ForecastDay';
import './WeekForecast.scss';

// TODO: Each instance of the Temperature component will need
// to instead be a Day component that will have its own style
class WeekForecast extends Component {
  render() {
    var day = new Date();
    const temperature = this.props.temperature;
    const weather = this.props.weather;

    return (
      temperature && (
        <div className="forecast">
          Next 7 Days:
          <ForecastDay
            day={day}
            pad={1}
            temperature={temperature[1]}
            weatherDescription={weather.list[1].weather[0].main}
          />
          <br />
          <ForecastDay
            day={day}
            pad={2}
            temperature={temperature[2]}
            weatherDescription={weather.list[2].weather[0].main}
          />
          <br />
          <ForecastDay
            day={day}
            pad={3}
            temperature={temperature[3]}
            weatherDescription={weather.list[3].weather[0].main}
          />
          <br />
          <ForecastDay
            day={day}
            pad={4}
            temperature={temperature[4]}
            weatherDescription={weather.list[4].weather[0].main}
          />
          <br />
          <ForecastDay
            day={day}
            pad={5}
            temperature={temperature[5]}
            weatherDescription={weather.list[5].weather[0].main}
          />
          <br />
          <ForecastDay
            day={day}
            pad={6}
            temperature={temperature[6]}
            weatherDescription={weather.list[6].weather[0].main}
          />
          <br />
        </div>
      )
    );
  }
}

export default WeekForecast;
