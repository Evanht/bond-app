import React from 'react'

import BuyTable from './buyTable'
import styled from 'styled-components'


const BuyContainer = styled.div `
	width: 50%;
`

const Buy = () => (
  <BuyContainer> 
  	<h3>Buy Bonds</h3> 
  	<BuyTable />
  </BuyContainer>
)

export default Buy
