import React from 'react'
import styled from 'styled-components'
import { Progress, Tooltip } from 'antd'
import { Flex, Box } from 'grid-styled'

const BondCard = styled(Flex)`
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px;
  width: 100%;
  ${'' /* height: 80px; */}
  margin-bottom: 10px;
`
const BondName = styled.h6`
  color: black;
  font-size: 14px;
`

const Bond = ({ bond }) => {
  return (
    <BondCard wrap>
      <Box width={1} px={1} py={1} align="center">
        <Tooltip title="Number of days until you are paid">
          <Progress percent={60} format={percent => `${percent}d`} />
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        <BondName>Angolan Infrastructure</BondName>
      </Box>
      <Box width={1/4} px={1} align="center">
        60 % of portfolio
      </Box>
      <Box width={1/4} px={1} align="center">
        <Tooltip title="When the bond will mature">
          11/01/2019
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        $208
      </Box>
    </BondCard>
  )
}

export default Bond
