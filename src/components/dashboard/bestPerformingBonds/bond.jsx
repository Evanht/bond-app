import React from 'react'
import styled from 'styled-components'
import { Progress, Tooltip } from 'antd'
import { Flex, Box } from 'grid-styled'
import { sample } from 'lodash'

const BondCard = styled(Flex)`
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px 5px 5px 0px;
  background: white;
  border-left: 4px solid ${({ color }) => color};
  border-radius: 4px;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
`
const BondName = styled.h6`
  color: black;
  font-size: 14px;
`
const days = [21, 46, 89, 10, 24, 56, 45, 93, 99, 77]

const Bond = ({ bond, bondNumber }) => {
  return (
    <BondCard wrap color={sample(['#FF4C4C', '#33F4AA', '#F9DC5C'])}>
      <Box width={1} px={1} align="center">
        <Tooltip title="Number of days until bond holders are paid">
          <Progress percent={days[bondNumber]} format={percent => `${percent}d` } />
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        <BondName>{bond.name}</BondName>
      </Box>
      <Box width={1/4} px={1} align="center">
        {bond.yieldToMaturity} % / year
      </Box>
      <Box width={1/4} px={1} align="center">
         {sample(['3', '5', '7', '10', '12', '16', '20'])} years to maturity
      </Box>
      <Box width={1/4} px={1} align="center">
        ${bond.marketDirtyPrice}
      </Box>
    </BondCard>
  )
}

export default Bond
