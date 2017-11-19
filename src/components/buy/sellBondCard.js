import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Modal, Button, notification, Progress  } from 'antd'
import { Flex, Box } from 'grid-styled'


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

const SellButton = styled.button `
  width: 20%;
  height: 100%;
  background-color: #F33A39;
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

const InfoButton = styled.button `
  width: 5%;
  height: 100%;
  background-color: #BBB;
`
const percentages = [12, 41, 38, 22, 18, 6, 16, 12, 22, 12]
const names = [
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL", 
  "Uganda Infrastructure XL",
  "Zambia Government XL"
]
const days = [
  21,  
  10, 
  24,
  46, 
  89
]
const dates = [
  '06/01/19',
  '14/03/21',
  '11/12/19',
  '10/11/20',
  '09/07/18',
  '06/01/19',
  '10/11/20',
  '09/07/18',
  '11/12/19',
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

  sellBond = (e) => {
    console.log(e);
    this.setState({
      confirmVisible: false,
    });
    notification.open({
      message: 'Success',
      description: 'You just sold a bond!',
    });
  }

  cancelSell = (e) => {
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
          <p>Some info ab this ffuckin bond </p>
        </div>
      ),
      okText: 'Ok',
      onOk() {},
    });
  }

  render() {
    return (
      <div>
      { /* <div>
        <BondCard>
          <Name width={3/10} px={1} align="center">
            Kenya Infrastructure
          </Name>
          <Percent width={1/5} px={1} align="center">
            50 % of portfolio
          </Percent>
          <MatureTime width={1/10} px={1} align="center">
            7 Years
          </MatureTime>
          <Number width={1/10} px={1} align="center">
            5237
          </Number>
          <SellButton width={1/5} px={1} align="center" onClick={this.showModal}>
            Sell
          </SellButton>
          <InfoButton width={1/10} px={1} align="center" onClick={this.info}>
            <Icon type="info" />
          </InfoButton>
        </BondCard>
      */ }
        <BondCard wrap >
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
            title="Sell Bond"
            visible={this.state.confirmVisible}
            onOk={this.sellBond}
            onCancel={this.cancelSell}
            cancelText = "Cancel"
            okText = "Sell"
          >
            <p>Are you sure you want to sell this bond??</p>
          </Modal>
      </div>
    )
  }
  
}

export default Bond

