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
    return (
      <form className="city-form" onSubmit={this.handleSubmit}>
        Please enter a city name: <br />
        <input
          type="text"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CityForm;
