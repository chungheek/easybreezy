import React from 'react';
import HttpsRedirect from 'react-https-redirect'
import logo from './logo.svg';
import './App.css';
import Today from './components/Today/Today';
import WeekForecast from './components/WeekForecast/WeekForecast';
import CityCountryForm from './components/CityCountryForm/CityCountryForm';

function App() {
  return (
    <HttpsRedirect>
      <div className="App">
        <header className="App-header">
          <CityCountryForm />
          <Today />
          <WeekForecast />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </HttpsRedirect>
  );
}

export default App;
