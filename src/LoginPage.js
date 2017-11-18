
import React from 'react';

import LoginForm from './components/LoginForm';
import AppDescription from './components/appDescription';

import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  height: 100vh;
  width: 100%;
`

const Box = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 50vh; 
  width: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`

class LoginPage extends React.Component {

  render() {
    return (
      <LoginContainer>
        <Box>
          <AppDescription />
          <LoginForm />
        </Box>
      </LoginContainer>
    );
   }
}



export default LoginPage;