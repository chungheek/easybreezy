import React, { Component } from 'react';
import { kelvinToCelsius, celsiusToFahrenheit } from './tempScaleConversions';
import './Toggle.scss';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celsius: false
        };
    this.toggleCelsius = this.toggleCelsius.bind(this);
    }

    toggleCelsius() {
        if (this.state.celsius === true) {
            this.setState({
                celsius: false
            });
        }
        else {
            this.setState({
                celsius: true
            });
        }
    }
    render() {
        const celsiusTemp = (kelvinToCelsius(this.props.temp)).toFixed(1);
        const fahrenheitTemp = (celsiusToFahrenheit(celsiusTemp)).toFixed(1);
        
        if(this.state.celsius) {
            return(
                <div className="toggle">
                    {celsiusTemp}
                    <br/>
                    <button class="actual-toggle" type="checkbox" onClick={this.toggleCelsius}>Click for Fahrenheit!</button>
                </div>
            );
        }
        else {
            return(
                <div className="toggle">
                    {fahrenheitTemp}
                    <br/>
                    <button class="actual-toggle" type="checkbox" onClick={this.toggleCelsius}>Click for Celsius!</button>
                </div>
            );
        }
    }
}

export default Toggle