import React, { Component } from 'react'
import styled from 'styled-components'
import { bonds } from '../../../api'
import BondTable from './bondTable'

import Graph from './graph.js';

const PortfolioWrapper = styled.div`
  ${'' /* border: 1px solid #FBFBFB; */}
  align-self: flex-end;
`
const StyledBondTable = styled(BondTable)`
  width: 600px;
`

class Portfolio extends Component {
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
      <PortfolioWrapper>
        <StyledBondTable />
      </PortfolioWrapper>
      //<Graph />
    )
  }
}

export default Portfolio
