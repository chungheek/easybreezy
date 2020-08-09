import React from 'react';
import './WeatherImage.scss';

class WeatherImage extends React.Component {
  render() {
    return (
      <div className="weatherImage">
        <img alt="weather" src={"http://openweathermap.org/img/wn/" + this.props.weatherImage + "@2x.png"} />
      </div>
    );
  }
  }
  
  export default WeatherImage;
