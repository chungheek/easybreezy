import React, { Component } from 'react';
import './CityForm.scss';

class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.value,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.callBack(this.state.location);
  }

  render() {
    if(this.props.error) {
      return (
        <div>
          <form className="city-form" onSubmit={this.handleSubmit}>
            <h1>Easy Breezy Weather</h1>
            Please enter a city name: <br />
            <input
              type="text"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
          <span className="city-form__error">Please enter a valid city name!</span>
        </div>
      )
    } else {
      return (
        <form className="city-form" onSubmit={this.handleSubmit}>
          <h1>Easy Breezy Weather</h1>
          Please enter a city name: <br />
          <input
            type="text"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

export default CityForm;
