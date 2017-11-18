import React, { Component } from 'react'
import styled from 'styled-components'
import { bonds } from '../../../api'
import BondTable from './bondTable'

const BestPerformingBondsWrapper = styled.div`
  ${'' /* border: 1px solid #FBFBFB; */}
  align-self: flex-end;
`
const StyledBondTable = styled(BondTable)`
  width: 400px;
`

class BestPerformingBonds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bonds: [],
    }
  }

  componentDidMount() {
    bonds.find()
      .then(response => this.setState({ bonds: response.data }))
  }

  render() {
    return (
      <BestPerformingBondsWrapper>
        <StyledBondTable />
      </BestPerformingBondsWrapper>
    )
  }
}

export default BestPerformingBonds
