import React from 'react'
import BuyBondCard from './buyBondCard'
import { map } from 'lodash'
import styled from 'styled-components'



const StyledTableHeader = styled.h2`
  letter-spacing: 1px;
  margin-bottom: 26px;
  border-bottom: 1px solid #1C88C3;
`

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const BuyTable = () => {
  return (
    <div>
      <StyledTableHeader>Buy Bonds</StyledTableHeader>
      <div>
        {map(array, bond => <BuyBondCard key={bond} bond={bond} />)}
      </div>
    </div>
  )
}

export default BuyTable
