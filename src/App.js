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
      apiResult: Object,
    };
  
  }

  convertToFarenheit(temp) {
    return (temp == null ? null : kelvinToFahrenheit(temp));
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
        apiResult: response,
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
            <Today temperature={this.convertToFarenheit(this.state.temperature)} />
            <WeekForecast temperature={this.convertToFarenheit(this.state.temperature)}/>
          </header>
        </div>
      </HttpsRedirect>
    );
  }
}

export default App;
