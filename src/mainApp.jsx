import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { SideMenu, TopNav, Dashboard, Buy, Sell } from './components'

const AppWrapper = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  overflow-y: auto;
`

const MainApp = () => (
  <div>
    <TopNav />
    <AppWrapper>
      <SideMenu />
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route path="/buy" component={Buy}/>
      <Route path="/sell" component={Sell}/>
    </AppWrapper>
  </div>
)

export default MainApp
