import React, { Component } from 'react'
import styled from 'styled-components'
import { bonds } from '../../../api'

import Graph from './graph.js';

const PortfolioWrapper = styled.div`
  background: red;
  border: 1px solid #FBFBFB;
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  height: 300px;
  width: 400px;
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
        This is the Portfolio section
      </PortfolioWrapper>
      //<Graph />
    )
  }
}

export default Portfolio
