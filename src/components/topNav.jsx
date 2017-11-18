import React from 'react'
import styled from 'styled-components'
import { Button, Avatar, Badge } from 'antd'

const StyledNavWrapper = styled.div`
  background-color: #136ACD;
  height: 50px;
  width: 100%;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
`
const BrandName = styled.h3`
  color: white;
  font-family: Avenir Next;
  letter-spacing: 2px;
  font-size: 18px;
`

const TopNav = () => (
  <div>
    <StyledNavWrapper>
      <BrandName> BondBase </BrandName>
      <Badge count={2}>
        <Avatar
          style={{ backgroundColor: '#fde3cf' }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Badge>
    </StyledNavWrapper>
  </div>
)

export default TopNav
