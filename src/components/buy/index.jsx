import React, { Component} from 'react'

import BuyTable from './buyTable'
import styled from 'styled-components'

import { Icon, Menu } from 'antd'

import SellTable from './sellTable'


const PageContainer = styled.div `
	width: 90%;
`

const BuySellBox = styled.div `
  padding-top: 50px;
`

class Buy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: "Buy",
    }
  }

    handleClick = (e) => {
      this.setState({
        view: e.key,
      })
    }
  

  render() {
    return (
      <PageContainer> 
        <Menu
          selectedKeys={[this.state.view]}
          onClick={this.handleClick}
          mode="horizontal"
        >
          <Menu.Item key="Buy">
            <Icon type="login" />Buy
          </Menu.Item>
          <Menu.Item key="Sell">
            <Icon type="logout" />Sell
          </Menu.Item>
        </Menu>
        <BuySellBox>
          {this.state.view == "Buy" ?
          	<BuyTable />
          :
            <SellTable />
          }
        </BuySellBox>
      </PageContainer>
    )
  }
}

export default Buy
