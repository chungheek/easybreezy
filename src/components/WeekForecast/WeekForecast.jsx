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

    return(
      (temperature &&
        <div className="forecast">
          Next 7 Days:
          <ForecastDay day={day} pad={1} temperature={temperature.list[1].temp.day} />
          <br/>
          <ForecastDay day={day} pad={2} temperature={temperature.list[2].temp.day} />
          <br/>
          <ForecastDay day={day} pad={3} temperature={temperature.list[3].temp.day} />
          <br/>
          <ForecastDay day={day} pad={4} temperature={temperature.list[4].temp.day} />
          <br/>
          <ForecastDay day={day} pad={5} temperature={temperature.list[5].temp.day} />
          <br/>
          <ForecastDay day={day} pad={6} temperature={temperature.list[6].temp.day} />
          <br/>
        </div>
      )
    );
  }
}

export default WeekForecast;
