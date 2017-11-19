import React, { Component} from 'react'

import BuyTable from './buyTable'
import styled from 'styled-components'

import { Icon, Menu } from 'antd'

import SellTable from './sellTable'


const BuyContainer = styled.div `
	width: 50%;
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
      <BuyContainer> 
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
        {this.state.view == "Buy" ?
        	<BuyTable />
        :
          <SellTable />
        }
      </BuyContainer>
    )
  }
}

export default Buy
