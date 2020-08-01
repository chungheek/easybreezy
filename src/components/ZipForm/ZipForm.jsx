import React, { Component } from 'react';
import './ZipForm.scss';

class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: props.value,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      zipCode: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.callBack(this.state.zipCode);
  }

  render() {
    return(
      <form className='zip-form' onSubmit={this.handleSubmit}>
        Please enter a ZIP code: <br/>
        <input type="text" value={this.state.zipCode} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZipForm;
