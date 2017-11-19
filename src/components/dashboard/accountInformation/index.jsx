import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { Flex } from 'grid-styled'

const StyledWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  ${'' /* align-items: center; */}
  justify-content: center;
  flex-direction: column;
  ${'' /* background: white; */}
`

const Card = styled(Flex)`
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 20px;
  background: white;
  height: 100px;
  border-radius: 4px;
  width: 100%;
  ${'' /* height: 80px; */}
  margin-bottom: 10px;
`
const NumericValue = styled.h1`
  font-size: 36px;
  margin-left: 20px;
`
const PercentageChange = styled.h1`
  color: #28A47B;
`
const DepositButton = styled(Button)`
  align-self: center;
  margin-left: 50px;
`


const AccountInformation = () => (
  <StyledWrapper>
    <Card>
      <h6>Cash Account</h6>
      <NumericValue>UGX 1898</NumericValue>
      <DepositButton>Deposit</DepositButton>
    </Card>
    <Card>
      <h6>Portfolio Value</h6>
      <NumericValue>UGX 2746</NumericValue>
      <PercentageChange>+ 7.18%</PercentageChange>
    </Card>
    {/* <Card>
      <TinyAreaChart />
    </Card> */}
  </StyledWrapper>
)

export default AccountInformation
