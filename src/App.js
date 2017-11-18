import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components'
import './App.css';
import api, { bonds } from './api'
import { TopNav, SideMenu } from './components'

import LoginPage from './LoginPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    api.authenticate({
      strategy: 'local',
      email: 'feathers@example.com',
      password: 'secret'
    })
    .then(() => {
      bonds.find()
      .then(response => console.log(response))
      .catch(err => console.log(err))
    })
  }

  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App;
