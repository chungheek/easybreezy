import React, { Component } from 'react';
import './CityCountryForm.scss';

class CityCountryForm extends Component {
  render() {
    return(
        <form className='city-country-form'>
            Please enter location: <br/>
            <input type='text' name='city' />
            <input type='text' name='country' />
            <button>Submit</button>
        </form>
    );
  }
}

export default CityCountryForm;