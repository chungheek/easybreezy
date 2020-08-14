import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import './App.css';
import CityForm from './components/CityForm/CityForm';
import { kelvinToFahrenheit } from './components/Toggle/tempScaleConversions';
import Toggle from './components/Toggle/Toggle';

class App extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      location: '',
      temperature: null,
      weather: null,
      humidity: null,
      weatherDescription: null,
      cityName: null,
      weatherImage: null,
      country: null,
      rain: null,
      error: false,
      speed: null,
      toggle: false
    };
  }

  temperatureArray() {
    var tempArray = [];
    if (this.state.weather === null) return null;
    for (var i = 0; i < 7; i++) {
      let temp = this.state.weather.list[i].temp.day;
      tempArray.push(kelvinToFahrenheit(temp).toFixed(1));
    }
    return tempArray;
  }

  humidityArray() {
    var humArray = [];
    if (this.state.weather === null) return null;
    for (var i = 0; i < 7; i++) {
      let hum = this.state.weather.list[i].humidity;
      humArray.push(hum);
    }
    return humArray;
  }

  forecastArray(paramName) {
    var forecastArray = [];
    if (this.state.weather === null) return null;
    for (var i = 0; i < 7; i++) {
      let  item = this.state.weather.list[i][paramName];
      forecastArray.push(item);
    }
    return forecastArray;
  }

  rainArray() {
    var rainArray = [];
    if (this.state.weather === null) return null;
    for (var i = 0; i < 7; i++) {
      let rain = this.state.weather.list[i].rain;
      rainArray.push(rain);
    }
    return rainArray;
  }

  windArray() {
    var windArray = [];
    if (this.state.weather === null) return null;
    for (var i = 0; i < 7; i++) {
      let wind = this.state.weather.list[i].speed;
      windArray.push(wind);
    }
    return windArray;
  }

  convertToFahrenheit() {
    return this.state.temperature == null
      ? null
      : kelvinToFahrenheit(this.state.temperature).toFixed(1);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  formCallBack = (locationData) => {
    this.getForecast(locationData);
  };
  


  getForecast(locationData) {
    const url =
      process.env.REACT_APP_OPEN_MAP_API +
      locationData +
      process.env.REACT_APP_ID;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          weather: response,
          temperature: response.list[0].temp.day,
          humidity: response.list[0].humidity,
          weatherDescription: response.list[0].weather[0].main,
          cityName: response.city.name,
          weatherImage: response.list[0].weather[0].icon,
          country: response.city.country,
          rain: response.list[0].rain ? response.list[0].rain : null,
          error: false,
          speed: response.list[0].speed,
          sunrise: response.list[0].sunrise,
          sunset: response.list[0].sunset,
          destTimeZone: response.city.timezone,
          toggle: true
        });
      })
      .catch((error) => {
        console.log('There was an issue with the API call', error);
        this.setState({
          location: '',
          temperature: null,
          weather: null,
          humidity: null,
          weatherDescription: null,
          cityName: null,
          weatherImage: null,
          country: null,
          rain: null,
          error: true,
          speed: null,
          sunrise: null,
          sunset: null,
          timezone: 0
        });
      });
  }

  render() {
    let toggle;
    if(this.state.toggle === true) {
      toggle = <Toggle
                location={this.state.cityName}
                country={this.state.country}
                temperature={this.convertToFahrenheit()}
                weatherDescription={this.state.weatherDescription}
                weatherImage={this.state.weatherImage}
                humidity={this.state.humidity}
                rain={this.state.rain}
                speed={this.state.speed}
                temperatureArray={this.temperatureArray()}
                rainArray={this.rainArray()}
                humidityArray={this.humidityArray()}
                weather={this.state.weather}
                windArray={this.windArray()}
                sunsetArray = {this.forecastArray('sunset')}
                sunriseArray = {this.forecastArray('sunrise')}
                destTimeZone = {this.state.destTimeZone}
              /> 
    }
    return (
      <HttpsRedirect>
        <div className="App">
          <header className="App-header">
            <CityForm
              value=""
              callBack={this.formCallBack}
              error={this.state.error}
            />
            {toggle}
          </header>
        </div>
      </HttpsRedirect>
    );
  }
}

export default App;
