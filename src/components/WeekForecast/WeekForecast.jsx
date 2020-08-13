import React, { Component } from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';
import './WeekForecast.scss';

// TODO: Each instance of the Temperature component will need
// to instead be a Day component that will have its own style
class WeekForecast extends Component {
  render() {
    var day = new Date();
    const temperature = this.props.temperatureArray;
    const humidity = this.props.humidityArray;
    const rain = this.props.rainArray;
    const weather = this.props.weather;
    const speed = this.props.windArray;

    return (
      temperature && (
        <div className="forecast">
          <div className="title">Next 6 Days:</div>
          <div className="forecast-row">
            <ForecastDay class="day1"
              day={day}
              pad={1}
              temperature={temperature[1]}
              humidity={humidity[1]}
              rain={rain[1]}
              weatherDescription={weather.list[1].weather[0].main}
              speed={speed[1]}
            />
            <ForecastDay class="day2"
              day={day}
              pad={2}
              temperature={temperature[2]}
              humidity={humidity[2]}
              rain={rain[2]}
              weatherDescription={weather.list[2].weather[0].main}
              speed={speed[2]}
            />
            <ForecastDay class="day3"
              day={day}
              pad={3}
              temperature={temperature[3]}
              humidity={humidity[3]}
              rain={rain[3]}
              weatherDescription={weather.list[3].weather[0].main}
              speed={speed[3]}
            />
            <ForecastDay class="day4"
              day={day}
              pad={4}
              temperature={temperature[4]}
              humidity={humidity[4]}
              rain={rain[4]}
              weatherDescription={weather.list[4].weather[0].main}
              speed={speed[4]}
            />
            <ForecastDay class="day5"
              day={day}
              pad={5}
              temperature={temperature[5]}
              humidity={humidity[5]}
              rain={rain[5]}
              weatherDescription={weather.list[5].weather[0].main}
              speed={speed[5]}
            />
            <ForecastDay class="day6"
              day={day}
              pad={6}
              temperature={temperature[6]}
              humidity={humidity[6]}
              rain={rain[6]}
              weatherDescription={weather.list[6].weather[0].main}
              speed={speed[6]}
            />
          </div>
        </div>
      )
    );
  }
}

export default WeekForecast;
