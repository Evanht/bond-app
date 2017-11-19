import React from 'react'
import styled from 'styled-components'
import { Progress, Icon, Menu } from 'antd'
import { Flex, Box } from 'grid-styled'


const BondCard = styled.div `
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  border: thin double #EDEDED;
  padding: 5px;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BuyButton = styled.button `
  width: 20%;
  height: 100%;
  background-color: #F33A39;
`

const Name = styled(Box) `
  font-size: 20px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Percent = styled(Box) `
  font-size: 15px; 
`

const MatureTime = styled(Box) `
  font-size: 15px; 
`

const Number = styled(Box) `
  font-size: 15px; 
`

const InfoButton = styled.button `
  width: 5%;
  height: 100%;
  background-color: grey;
`


const Bond = ({ bond }) => {
  return (
    <div>
      <BondCard>
        <Name width={3/10} px={1} align="center">
          Kenya Infrastructure
        </Name>
        <Percent width={1/5} px={1} align="center">
          50 % of portfolio
        </Percent>
        <MatureTime width={1/10} px={1} align="center">
          7 Years
        </MatureTime>
        <Number width={1/10} px={1} align="center">
          5237
        </Number>
        <BuyButton width={1/5} px={1} align="center">
          Sell
        </BuyButton>
        <InfoButton width={1/10} px={1} align="center" >
          <Icon type="info" />
        </InfoButton>
      </BondCard>
    </div>
  )
}

export default Bond

