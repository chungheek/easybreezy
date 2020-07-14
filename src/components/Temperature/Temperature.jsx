import React, { Component } from 'react';
import './Temperature.scss';
import FormInput from '../FormInput/FormInput';

class Temperature extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      api: [],
      temperature: 303,
      location: 'Atlanta'
    }
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentDidMount() {
    this.getForecast();
  }

  formCallBack = (locationData) => {
    this.getForecast(locationData);
  }

  getForecast(location='Atlanta') {
    //const url = 'http://api.openweathermap.org/data/2.5/weather?q=Austin&APPID=dbc4c991f66320a5787180247fb2a641';
    let url2 = process.env.REACT_APP_OPEN_MAP_API_TODAY + location + process.env.REACT_APP_ID;
    fetch(url2)
    .then(response => response.json())
    .then(response => {
      this.setState({
        location: location,
        temperature: response.main.temp
      })
    })
  }

  render() {
    return(
      <div>
        <FormInput value="Atlanta" callBack={this.formCallBack}/>
        <div className="temp">
          Temperature: {this.state.temperature} <br />
        </div>
      </div>
      
    );
  }
}

export default Temperature;
