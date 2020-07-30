import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect'
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
      location: 'Atlanta',
      temperature: null,
      weather: null,
    };
  
  }

  temperatureArray() {
    var tempArray = [];
    if(this.state.weather === null) return null;
    for (var i=0; i < 7; i++) {
      let temp = this.state.weather.list[i].temp.day;
      tempArray.push(kelvinToFahrenheit(temp).toFixed(1));
    }
    return tempArray;
  }

  convertToFarenheit() {
    return (this.state.temperature == null ? null : kelvinToFahrenheit(this.state.temperature).toFixed(1));
  }

  forceUpdateHandler() {
    this.forceUpdate();
  };

  formCallBack = (locationData) => {
    this.setState({ location: locationData });
    this.getForecast();
  }

  getForecast() {
    const url = process.env.REACT_APP_OPEN_MAP_API + this.state.location + process.env.REACT_APP_ID;
    fetch(url)
    .then(response => response.json())
    .catch(console.log("NOT OKAY"))
    .then(response => {
      this.setState({
        weather: response,
        temperature: response.list[0].temp.day,
      })
    }).catch(console.log("DEF NOT OKAY"))
  }

  render() {
    return (
      <HttpsRedirect>
        <div className="App">
          <header className="App-header">
            <CityForm value="Atlanta" callBack={this.formCallBack} />
            <Today temperature={this.convertToFarenheit()} />
            <WeekForecast temperature={this.temperatureArray()}/>
          </header>
        </div>
      </HttpsRedirect>
    );
  }
}

export default App;
