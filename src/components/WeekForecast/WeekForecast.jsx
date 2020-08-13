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
    const sunrise = this.props.sunriseArray;
    const sunset = this.props.sunsetArray;

    return (
      temperature && (
        <div className="forecast">
          Next 6 Days:
          <ForecastDay
            day={day}
            pad={1}
            temperature={temperature[1]}
            humidity={humidity[1]}
            rain={rain[1]}
            weatherDescription={weather.list[1].weather[0].main}
            speed={speed[1]}
            sunrise={sunrise[1]}
            sunset={sunset[1]}
          />
          <br />
          <ForecastDay
            day={day}
            pad={2}
            temperature={temperature[2]}
            humidity={humidity[2]}
            rain={rain[2]}
            weatherDescription={weather.list[2].weather[0].main}
            speed={speed[2]}
            sunrise={sunrise[2]}
            sunset={sunset[2]}
          />
          <br />
          <ForecastDay
            day={day}
            pad={3}
            temperature={temperature[3]}
            humidity={humidity[3]}
            rain={rain[3]}
            weatherDescription={weather.list[3].weather[0].main}
            speed={speed[3]}
            sunrise={sunrise[3]}
            sunset={sunset[3]}
          />
          <br />
          <ForecastDay
            day={day}
            pad={4}
            temperature={temperature[4]}
            humidity={humidity[4]}
            rain={rain[4]}
            weatherDescription={weather.list[4].weather[0].main}
            speed={speed[4]}
            sunrise={sunrise[4]}
            sunset={sunset[4]}
          />
          <br />
          <ForecastDay
            day={day}
            pad={5}
            temperature={temperature[5]}
            humidity={humidity[5]}
            rain={rain[5]}
            weatherDescription={weather.list[5].weather[0].main}
            speed={speed[5]}
            sunrise={sunrise[5]}
            sunset={sunset[5]}
          />
          <br />
          <ForecastDay
            day={day}
            pad={6}
            temperature={temperature[6]}
            humidity={humidity[6]}
            rain={rain[6]}
            weatherDescription={weather.list[6].weather[0].main}
            speed={speed[6]}
            sunrise={sunrise[6]}
            sunset={sunset[6]}
          />
          <br />

        </div>
      )
    );
  }
}

export default WeekForecast;
