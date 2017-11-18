
import React, { Component } from 'react';

import LoginForm from './components/LoginForm';
import AppDescription from './components/AppDescription';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <AppDescription />
        <LoginForm toggleLoggedIn={this.props.toggleLoggedIn}/>
      </div>
    );
   }
}

export default LoginPage;
