import React from 'react'
import styled from 'styled-components'
import { Progress, Icon } from 'antd'
import { Flex, Box } from 'grid-styled'

const BondCard = styled.div `
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const BondName = styled.h6`
  color: black;
  font-size: 14px;
`

const Bond = ({ bond }) => {
  return (
    <BondCard>
      <Box width={1/5} px={1} align="center">
        <h5>Uganda Infrastructure</h5>
      </Box>
      <Icon type="info" />
      <Box width={1/5} px={1} align="center">
        <h5>60 % of portfolio</h5>
      </Box>
      <Box width={1/5} px={1} align="center">
        wtf
      </Box>
      <Box width={1/5} px={1} align="center">
        207
      </Box>
      <button width={1/5} px={1} align="center">
        Buy
      </button>
    </BondCard>
  )
}

export default Bond
