
import React, { Component } from 'react';

import LoginForm from './components/LoginForm';
import AppDescription from './components/AppDescription';

import styled from 'styled-components';

import img from './components/01.jpg';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  background-image: url(${img});
  height: 100vh;
  width: 100%;
`

const LoginFlex = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10%;
  margin-bottom: 5%;
`

class LoginPage extends React.Component {
  render() {
    return (
      <LoginContainer>
        <LoginFlex>
          <AppDescription />
          <LoginForm toggleLoggedIn={this.props.toggleLoggedIn} />
        </LoginFlex>
      </LoginContainer>
    )
   }
}

export default LoginPage;

