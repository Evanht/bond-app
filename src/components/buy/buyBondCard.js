import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Modal, Button, notification, Progress  } from 'antd'
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
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL"
]
const days = [
  21, 
  46, 
  89, 
  10, 
  24
]
const dates = [
  '11/12/19',
  '10/11/20',
  '09/07/18',
  '06/01/19',
  '14/03/21',
  '11/12/19',
  '10/11/20',
  '09/07/18',
  '06/01/19',
  '14/03/21'
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
              { percentages[this.props.bond - 1] } % of portfolio
            </Box>
            <Box width={2/10} px={1} align="center">
              <div>
                { dates[this.props.bond - 1] }
              </div>
             </Box>
            <Box width={1/10} px={1} align="center">
              price
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
            <p>Are you sure you want to buy { names[this.props.bond - 1] }?</p>
          </Modal>

          
      </div>
    )
  }
  
}

export default Bond











/*
import React from 'react'
import styled from 'styled-components'
import { Progress, Tooltip } from 'antd'
import { sample } from 'lodash'
import { Flex, Box } from 'grid-styled'
import moment from 'moment'

const BondCard = styled(Flex)`
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  padding: 5px 5px 5px 0px;
  background: white;
  border-left: 4px solid ${({ color }) => color};
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
`
const BondName = styled.h6`
  color: black;
  font-size: 14px;
`
const percentages = [38, 22, 18, 6, 16]
const days = [21, 46, 89, 10, 24]
const dates = [
  '11/12/19',
  '10/11/20',
  '09/07/18',
  '06/01/19',
  '14/03/21',
]

const Bond = ({ bond, bondNumber }) => {
  console.log(bondNumber)
  return (
    <BondCard wrap color={sample(['#FF4C4C', '#33F4AA', '#F9DC5C'])}>
      <Box width={1} px={1} py={1} align="center">
        <Tooltip title="Number of days until you are paid">
          <Progress percent={days[bondNumber]} format={percent => `${percent}d`} />
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        <BondName>{bond.name}</BondName>
      </Box>
      <Box width={1/4} px={1} align="center">
        {percentages[bondNumber]} % of portfolio
      </Box>
      <Box width={1/4} px={1} align="center">
        <Tooltip title="When the bond will mature">
          <div>
            {dates[bondNumber]}
          </div>
        </Tooltip>
      </Box>
      <Box width={1/4} px={1} align="center">
        ${bond.marketDirtyPrice}
      </Box>
    </BondCard>
  )
}

export default Bond
*/


