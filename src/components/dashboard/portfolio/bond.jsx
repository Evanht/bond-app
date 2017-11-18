import React from 'react'
import styled from 'styled-components'
import { Progress } from 'antd'
import { Flex, Box } from 'grid-styled'

const BondCard = styled(Flex)`
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
`
const BondName = styled.h6`
  color: black;
  font-size: 14px;
`

const Bond = ({ bond }) => {
  return (
    <BondCard wrap>
      <Box width={1} px={1} align="center">
        <Progress percent={60} />
      </Box>
      <Box width={1/4} px={1} align="center">
        <BondName>Angolan Infrastructure</BondName>
      </Box>
      <Box width={1/4} px={1} align="center">
        <h6>60 % of portfolio</h6>
      </Box>
      <Box width={1/4} px={1} align="center">
        wtf
      </Box>
      <Box width={1/4} px={1} align="center">
        207
      </Box>
    </BondCard>
  )
}

export default Bond
