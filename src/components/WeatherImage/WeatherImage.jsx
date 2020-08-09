import React from 'react';
import { getWeatherImage } from './getWeatherImage';
import './WeatherImage.scss';
//import WeatherDescription from '../WeatherDescription/WeatherDescription';

class WeatherImage extends React.Component {
  render() {
    console.log(this.props.weatherDescription);
    return (
      <div className="weatherImage">
        <img alt="weather" src={"http://openweathermap.org/img/wn/" + getWeatherImage(this.props.weatherDescription) + "@2x.png"} />
      </div>
    );
  }
  }
  
  export default WeatherImage;

// const WeatherImage = (props) => {
  
//   return (
//     <div className="weatherImage">
//       <img alt="weather" src={"http://openweathermap.org/img/wn/" + getWeatherImage(<WeatherDescription weatherDescription={props.weatherDescription} />) + "@2x.png"} />
//     </div>
//   );
// };

// export default WeatherImage;