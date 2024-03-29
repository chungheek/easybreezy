import React, {Component} from 'react';
import './Rain.scss';
import rainImg from '../images/rain.png';

class Rain extends Component {

  rain() {
    return this.props.rain ? this.props.rain : 0;
  }

  render() {
    return (
      <div>
        <img className="rain-img" src={rainImg} alt="humidity" />
        Rain: {this.rain()} (mm)
      </div>
    )
  }
};

export default Rain;