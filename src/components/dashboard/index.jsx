import React from 'react'
import styled from 'styled-components'
import Portfolio from './portfolio'

const StyledWrapper = styled.div`
  display: flex;
`

const Dashboard = () => (
  <StyledWrapper>
    <h3>Dashboard</h3>
    <Portfolio />
  </StyledWrapper>
)

export default Dashboard
