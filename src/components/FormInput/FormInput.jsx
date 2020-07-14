import React, { Component } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      location: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.callBack(this.state.value);
  }

  render() {
    return(
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            City Name:
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        <label>{}</label> {/*TODO: Need to add input validation here */}
        </form>
    );
  }
}

export default FormInput;