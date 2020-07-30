import React, { Component } from 'react';
import Temperature from '../Temperature/Temperature';
import './ForecastDay.scss';

class ForecastDay extends Component {
  render() {
    const pad = this.props.pad;
    const today = new Date();
    const futureDay = new Date(today);
    futureDay.setDate(futureDay.getDate() + pad);

  	var dd = String(futureDay.getDate()).padStart(2, '0');
    var mm = String(futureDay.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = futureDay.getFullYear();
    var stringDay = mm + '/' + dd + '/' + yyyy;

    return(
      <div className="forecastday">
      	{stringDay}
        <Temperature temperature={this.props.temperature}/>
      </div>
    );
  }
}

export default ForecastDay;
