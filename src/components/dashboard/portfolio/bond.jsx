import React from 'react'
import styled from 'styled-components'
import { Progress, Tooltip } from 'antd'
import { sample } from 'lodash'
import { Flex, Box } from 'grid-styled'
import moment from 'moment'

const BondCard = styled(Flex)`
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px 5px 5px 0px;
  background: white;
  border-left: 4px solid ${({ color }) => color};
  border-radius: 4px;
  width: 100%;
  ${'' /* height: 80px; */}
  margin-bottom: 10px;
`
const BondName = styled.h6`
  color: black;
  font-size: 14px;
`
const percentages = [38, 22, 18, 6, 16]
const days = [21, 46, 89, 10, 24]
const dates = [
  '11/12/19',
  '10/11/20',
  '09/07/18',
  '06/01/19',
  '14/03/21',
]

const Bond = ({ bond, bondNumber }) => {
  console.log(bondNumber)
  return (
    <BondCard wrap color={sample(['#FF4C4C', '#33F4AA', '#F9DC5C'])}>
      <Box width={1} px={1} py={1} align="center">
        <Tooltip title="Number of days until you are paid">
          <Progress percent={days[bondNumber]} format={percent => `${percent}d`} />
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        <BondName>{bond.name}</BondName>
      </Box>
      <Box width={1/4} px={1} align="center">
        {percentages[bondNumber]} % of portfolio
      </Box>
      <Box width={1/4} px={1} align="center">
        <Tooltip title="When the bond will mature">
          <div>
            {dates[bondNumber]}
          </div>
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        UGX {bond.marketDirtyPrice}
      </Box>
    </BondCard>
  )
}

export default Bond
