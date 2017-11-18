import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components'
import './App.css';
import api, { bonds } from './api'
import MainApp from './mainApp'

import LoginPage from './LoginPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }

  this.toggleLoggedIn = this.toggleLoggedIn.bind(this)
  }

  toggleLoggedIn() {
    this.setState({
      isLoggedIn: true,
    })
  }
  componentDidMount() {
    api.authenticate()
    .then(({ accessToken }) => {
      api.passport.verifyJWT(accessToken)
        .then(response => response.userId && this.toggleLoggedIn())
    })
  }

  render() {
    return (
      <Router className="App">
        <div>
          {this.state.isLoggedIn ?
            <Route path="/" component={MainApp}/>
            :
            <Route path="/" render={() => <LoginPage toggleLoggedIn={this.toggleLoggedIn} />}/>
          }
        </div>
      </Router>
    );
  }
}

export default App;
