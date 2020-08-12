import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import './App.css';
import Today from './components/Today/Today';
import WeekForecast from './components/WeekForecast/WeekForecast';
import CityForm from './components/CityForm/CityForm';
import { kelvinToFahrenheit } from './components/Toggle/tempScaleConversions';

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
      let hum = this.state.weather.list[i].rain;
      humArray.push(hum);
    }
    return humArray;
  }

  rainArray() {
    var rainArray = [];
    if (this.state.weather === null) return null;
    for (var i = 0; i < 7; i++) {
      let rain = this.state.weather.list[i].humidity;
      rainArray.push(rain);
    }
    return rainArray;
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
        });
      })
      .catch((error) => {
        console.log('There was an issue with the API call', error);
        this.setState({
          location: 'Atlanta',
          temperature: null,
          weather: null,
          humidity: null,
          weatherDescription: null,
          cityName: null,
          weatherImage: null,
          country: null,
          rain: null,
          error: true
        });
      });
  }

  render() {
    return (
      <HttpsRedirect>
        <div className="App">
          <header className="App-header">
            <CityForm value="Atlanta" callBack={this.formCallBack} error={this.state.error} />
            <Today
              location={this.state.cityName}
              country={this.state.country}
              temperature={this.convertToFahrenheit()}
              weatherDescription={this.state.weatherDescription}
              weatherImage={this.state.weatherImage}
              humidity={this.state.humidity}
              rain={this.state.rain}
            />
            <WeekForecast
              temperature={this.temperatureArray()}
              rain={this.rainArray()}
              humidity={this.humidityArray()}
              weather={this.state.weather}
            />
          </header>
        </div>
      </HttpsRedirect>
    );
  }
}

export default App;
