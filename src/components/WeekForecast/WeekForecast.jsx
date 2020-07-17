import React, { Component } from 'react';
//import Temperature from '../Temperature/Temperature';
import ForecastDay from '../ForecastDay/ForecastDay';
import './WeekForecast.scss';

// TODO: Each instance of the Temperature component will need
// to instead be a Day component that will have its own style
class WeekForecast extends Component {
  render() {
    var day = new Date();

    return(
      <div className="forecast">
      	Next 7 Days:
        <ForecastDay day={day} pad={1}/>
        <br/>
        <ForecastDay day={day} pad={2}/>
        <br/>
        <ForecastDay day={day} pad={3}/>
        <br/>        
        <ForecastDay day={day} pad={4}/>
        <br/>
        <ForecastDay day={day} pad={5}/>
        <br/>
        <ForecastDay day={day} pad={6}/>
        <br/>       
        <ForecastDay day={day} pad={7}/>
      </div>
    );
  }
}

export default WeekForecast;
