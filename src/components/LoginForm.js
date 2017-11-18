import api from '../api';
import styled from 'styled-components';
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const ContainerForm = styled.div `
  margin-right: 14%;
  background-color: white;
  min-height: 50vh; 
  width: 35%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`

const Submit = styled(Button) `
  margin-top: 10vh;
  width: 100%;
`



const Login = styled(Form) `
  margin: 15px;
`

const Inputs = styled.div `
  padding-top: 10%;
`

const Heading = styled.h2 `
  text-align: center;
  font-size: 40px;
`

class login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      email: '',
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
      email: this.state.email,
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
      <ContainerForm>
        <Login onSubmit={this.handleSubmit}>
          <Heading>Login: </Heading>
          <Inputs>
            <FormItem>
                <Input 
                  prefix={<Icon type="user" 
                  style={{ fontSize: 13 }} />} 
                  placeholder="Email" 
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
            </FormItem>
            <br />
            <FormItem>
                <Input 
                  prefix={<Icon type="user" 
                  style={{ fontSize: 13 }} />} 
                  placeholder="Password" 
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
            </FormItem>
          </Inputs>

          <Submit type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Submit>
        </Login>
      </ContainerForm>
    );
   }
}

export default login;
