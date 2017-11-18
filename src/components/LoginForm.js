
import React, { Component } from 'react';

import api from '../api';

class login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    api.authenticate({
      strategy: 'local',
      email: this.state.username,
      password: this.state.password
    })
      .then(({ accessToken }) => {
        api.passport.verifyJWT(accessToken)
          .then(response => response.userId && this.props.toggleLoggedIn())
          .catch((err) => console.log('Error:', err))
      })
      .catch(err => {
        console.log('Err', err)
      })

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
   }
}

export default login;
