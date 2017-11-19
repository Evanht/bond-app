import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import Graph from './portfolio/graph'
import AccountInformation from './accountInformation'
import Portfolio from './portfolio'
import BestPerformers from './bestPerformingBonds'
import WelcomeMessage from './dashboardWelcome'

const StyledFlex = styled(Flex)`
  width: 100%;
  padding-top: 40px;
  overflow-y: auto;
  background-color: #FBFBFB;
`
const StyledHeaders = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`
const StyledGraphHeader = styled.h2`
  letter-spacing: 1px;
  margin-bottom: 26px;
  text-align: center;
  ${'' /* border-bottom: 1px solid #1C88C3; */}
`

const Dashboard = () => (
  <StyledFlex wrap align="center" justify="center">
    <Box width={1} px={4}>
      <WelcomeMessage />
    </Box>
    <Box width={1/2} px={4}>
      <AccountInformation />
      {/* <StyledGraphHeader>Projected returns from your portfolio</StyledGraphHeader> */}
      {/* <Graph /> */}
    </Box>
    <Box width={1/2} px={4} py={2}>
      <Portfolio />
    </Box>
    <Box width={1} px={4} py={4}>
      <BestPerformers />
    </Box>
  </StyledFlex>
)

export default Dashboard
