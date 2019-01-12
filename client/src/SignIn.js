import React, { Component } from 'react';
import './App.css';
import isEmail from 'validator/lib/isEmail';

import ListItem from './ListItem.js';

class SignIn extends Component {
  // add validation 
  // title
  // language
  // age

  state = {
    fields: {
      name: '',
      email: '',
      language: '',
    },
    fieldErrors: {},
    people: [],
  };

  onFormSubmit = (evt) => {
    const people = [...this.state.people];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name: '',
        email: '',
        language: ''
      },
    });
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  validate = (person) => {
    const errors = {};
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    if (!person.language) errors.language = 'Language required/Se requiere idioma';    
    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  };
  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>

          <input
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>

          <br />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

          <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>

          <br />

          
            <label for="t1">Language options/Seleccione su idioma<abbr title="This field is mandatory">*</abbr></label>
            <input type="text" id="t1" name="language" list="l1" required
                  pattern="[Ee]nglish|[Ee]spanol|[Oo]ther"/>
            <datalist id="l1">
              <option>English</option>
              <option>Espa&ntilde;ol</option>
              <option>Other</option>
            </datalist>
          
          <input type='submit' />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            {this.state.people.map(({ name, email, language }, i) =>
              <li key={i}>{name} ({email}) {language}</li>
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default SignIn;

