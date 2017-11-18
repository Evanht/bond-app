import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components'
import './App.css';
import api, { bonds } from './api'
import { TopNav, SideMenu } from './components'

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
      <div className="App">
        <TopNav />
        <SideMenu />
      </div>
    );
  }
}

export default App;
