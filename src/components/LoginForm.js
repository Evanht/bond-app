import api from '../api';
import styled from 'styled-components';

import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



const ContainerForm = styled.div `
  margin-right: 10px;
  width: 90%;
`





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
    console.log("username: " + this.state.username);
    console.log("password: " + this.state.password);
    
    api.authenticate({
      strategy: 'local',
      email: this.state.email,
      password: this.state.password
    });

    event.preventDefault();
  }

  render() {
    return (
      <ContainerForm>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
              <Input 
                prefix={<Icon type="user" 
                style={{ fontSize: 13 }} />} 
                placeholder="Email" 
                name="text"
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
      </ContainerForm>
    );
   }
}

export default login;