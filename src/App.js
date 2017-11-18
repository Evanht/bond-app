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
  constructor() {
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
  /*componentDidMount() {
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
  }*/

  render() {
    return (
      <Router className="App">
        <div>
          {this.state.isLoggedIn ?
            <Route exact path="/" component={Home}/>
            :
            <Route exact path="/" render={() => <LoginPage toggleLoggedIn={this.toggleLoggedIn} />}/>
          }
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
