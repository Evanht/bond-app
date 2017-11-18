import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components'
import './App.css';
import api, { bonds } from './api'

import login from './login';

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
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/login" component={login}/>
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
