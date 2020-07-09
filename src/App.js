import React from 'react';
import logo from './logo.svg';
import './App.css';
import Temperature from './components/Temperature/Temperature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Temperature />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
