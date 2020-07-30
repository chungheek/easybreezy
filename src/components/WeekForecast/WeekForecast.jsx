import React, { Component } from 'react';
//import Temperature from '../Temperature/Temperature';
import ForecastDay from '../ForecastDay/ForecastDay';
import './WeekForecast.scss';

// TODO: Each instance of the Temperature component will need
// to instead be a Day component that will have its own style
class WeekForecast extends Component {
  render() {
    const temperature = this.props.temperature;

    return(
      (temperature &&
        <div className="forecast">
          Next 7 Days:
          <ForecastDay pad={1} temperature={temperature.list[1].temp.day} />
          <br/>
          <ForecastDay pad={2} temperature={temperature.list[2].temp.day} />
          <br/>
          <ForecastDay pad={3} temperature={temperature.list[3].temp.day} />
          <br/>
          <ForecastDay pad={4} temperature={temperature.list[4].temp.day} />
          <br/>
          <ForecastDay pad={5} temperature={temperature.list[5].temp.day} />
          <br/>
          <ForecastDay pad={6} temperature={temperature.list[6].temp.day} />
          <br/>
        </div>
      )
    );
  }
}

export default WeekForecast;
