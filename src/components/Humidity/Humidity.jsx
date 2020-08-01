import React from 'react';
import './Humidity.scss';
import humidity from '../images/humidity.png';

class Humidity extends React.Component {
  render() {
    return(
      <div className="humid">
        <img src={humidity} alt="humidity" />Humidity: {this.props.humidity}%<br />
      </div>
    );
  }
}

export default Humidity;
