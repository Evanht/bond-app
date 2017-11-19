import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Modal, Button, notification, Progress, Input  } from 'antd'
import { Flex, Box } from 'grid-styled'
import { sample } from 'lodash'

const BondCard = styled.div `
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px 5px 5px 0px;
  background: white;
  border-left: 4px solid ${({ color }) => color};
  border-radius: 4px;
  width: 100%;
  ${'' /* height: 80px; */}
  margin-bottom: 10px;
`

const BondInfo = styled.div `
  display: flex;
`

const Name = styled(Box) `
  font-size: 20px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Percent = styled(Box) `
  font-size: 15px; 
`

const MatureTime = styled(Box) `
  font-size: 15px; 
`

const Number = styled(Box) `
  font-size: 15px; 
`



const percentages = [38, 22, 18, 6, 16, 12, 41, 12, 22, 12]
const names = [
  "Uganda Government", 
  "Uganda Infrastructure",
  "Uganda Technology", 
  "Uganda Construction",
  "Uganda Water XL", 
  "Uganda Power",
  "Uganda Oil", 
  "Uganda Wind",
  "Uganda Health", 
  "Uganda Renewables XL"
]
const years = [
  2, 
  4, 
  10, 
  3, 
  12,
  5,
  6,
  9,
  3,
  1
]

const dirtyMarketPrice = [
    622,
    364,
    637,
    467,
    113,
    132,
    253,
    664,
    663,
    112
] 

class Bond extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmVisible: false
    }
  }

  showModal = () => {
    this.setState({
      confirmVisible: true,
    });
  }

  buyBond = (e) => {
    console.log(e);
    this.setState({
      confirmVisible: false,
    });
    notification.open({
      message: 'Success',
      description: `You just bought ${ names[this.props.bond - 1] }`,
    });
  }

  cancelBond = (e) => {
    console.log(e);
    this.setState({
      confirmVisible: false,
    });
  }

  info() {
    Modal.info({
      title: 'Info',
      content: (
        <div>
          <p>Information about the bond</p>
        </div>
      ),
      okText: 'Ok',
      onOk() {},
    });
  }

  render() {
    return (
      <div>
        <BondCard wrap color={sample(['#FF4C4C', '#33F4AA', '#F9DC5C'])}>
          <Box width={1} px={1} py={1} align="center">
            <Progress percent={ percentages[this.props.bond - 1] } format={percent => `${percent}d`} />
          </Box>
          <BondInfo>
            <Box width={3/10} px={1} align="center">
              <h2>{ names[this.props.bond - 1] }</h2>
            </Box>
            <Box width={2/10} px={1} align="center">
              { percentages[this.props.bond - 1] } % / year
            </Box>
            <Box width={2/10} px={1} align="center">
              <div>
                { years[this.props.bond - 1] } years until maturity
              </div>
             </Box>
            <Box width={1/10} px={1} align="center">
              UGD { dirtyMarketPrice[this.props.bond - 1] }
            </Box>
            <Button width={1/10} px={1} align="center" onClick={this.showModal} type="primary">
              Buy
            </Button>
            <Button width={1/10} px={1} align="center" onClick={this.info} type="dashed">
              <Icon type="info" />
            </Button>
          </BondInfo>
        </BondCard>

        <Modal
            title="Buy Bond"
            visible={this.state.confirmVisible}
            onOk={this.buyBond}
            onCancel={this.cancelBond}
            cancelText = "Cancel"
            okText = "Buy"
          >
            <h2> How many bonds would you like to buy in  {names[this.props.bond - 1] }? </h2>
            <Input type="number" placeholder="Quantity" />
          </Modal>

          
      </div>
    )
  }
  
}

export default Bond

