
import React from 'react';

import LoginForm from './components/LoginForm';
import AppDescription from './components/AppDescription';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <AppDescription />
        <LoginForm />
      </div>
    );
   }
}

export default LoginPage;