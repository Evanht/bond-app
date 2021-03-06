import React from 'react'
import BondCard from './bond'
import { map } from 'lodash'
import styled from 'styled-components'

const StyledTable = styled.div`
  ${'' /* overflow-y: auto;
  height: 400px; */}
`

const StyledTableHeader = styled.h2`
  letter-spacing: 1px;
  margin-bottom: 26px;
  border-bottom: 1px solid #1C88C3;
`

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const BondTable = ({ bonds }) => {
  return (
    <div>
      <StyledTableHeader>Top Performers</StyledTableHeader>
      <StyledTable>
        {map(bonds, (bond, index) => <BondCard key={bond._id} bond={bond} bondNumber={index} />)}
      </StyledTable>
    </div>
  )
}

export default BondTable
