import React from 'react'
import styled from 'styled-components'
import Portfolio from './portfolio'
import { Flex, Box } from 'grid-styled'

const StyledFlex = styled(Flex)`
  width: 100%;
  padding-top: 40px;
`

const Dashboard = () => (
  <StyledFlex>
    <Box width={1/2} px={4}>
      <Portfolio />
    </Box>
    <Box width={1/2} px={4}>
      <Portfolio />
    </Box>
  </StyledFlex>
)

export default Dashboard
