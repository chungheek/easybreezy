import React, { Component } from 'react';
import { fahrenheitToCelsius } from './tempScaleConversions';
import './Toggle.scss';
import Today from '../Today/Today';
import WeekForecast from '../WeekForecast/WeekForecast';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: false,
    };
    this.toggleCelsius = this.toggleCelsius.bind(this);
  }

  setCelsiusArray() {
    var celsiusArray = [];
    for (let temperature of this.props.temperatureArray) {
      temperature = fahrenheitToCelsius(temperature).toFixed(1);
      celsiusArray.push(temperature);
    }
    return celsiusArray;
  }

  toggleCelsius() {
    if (this.state.celsius === true) {
      this.setState({
        celsius: false,
      });
    } else {
      this.setState({
        celsius: true,
      });
    }
  }
  render() {
    if (this.state.celsius) {
      return (
        <div className="toggle">
          <br></br>
          <button
            className="actual-toggle"
            type="checkbox"
            onClick={this.toggleCelsius}
          >
            Click for Fahrenheit!
          </button>
          <Today
            location={this.props.location}
            country={this.props.country}
            temperature={fahrenheitToCelsius(this.props.temperature).toFixed(1)}
            weatherDescription={this.props.weatherDescription}
            weatherImage={this.props.weatherImage}
            humidity={this.props.humidity}
            rain={this.props.rain}
            speed={this.props.speed}
            sunriseArray={this.props.sunriseArray}
            sunsetArray={this.props.sunsetArray}
          />
          <WeekForecast
            temperatureArray={this.setCelsiusArray()}
            rainArray={this.props.rainArray}
            humidityArray={this.props.humidityArray}
            weather={this.props.weather}
            windArray={this.props.windArray}
            sunriseArray={this.props.sunriseArray}
            sunsetArray={this.props.sunsetArray}
          />
        </div>
      );
    } else {
      return (
        <div className="toggle">
          <br></br>
          <button
            className="actual-toggle"
            type="checkbox"
            onClick={this.toggleCelsius}
          >
            Click for Celsius!
          </button>
          <br></br>
          <Today
            location={this.props.location}
            country={this.props.country}
            temperature={this.props.temperature}
            weatherDescription={this.props.weatherDescription}
            weatherImage={this.props.weatherImage}
            humidity={this.props.humidity}
            rain={this.props.rain}
            speed={this.props.speed}
            sunriseArray={this.props.sunriseArray}
            sunsetArray={this.props.sunsetArray}
          />
          <WeekForecast
            temperatureArray={this.props.temperatureArray}
            rainArray={this.props.rainArray}
            humidityArray={this.props.humidityArray}
            weather={this.props.weather}
            windArray={this.props.windArray}
            sunriseArray={this.props.sunriseArray}
            sunsetArray={this.props.sunsetArray}
          />
        </div>
      );
    }
  }
}

export default Toggle;
