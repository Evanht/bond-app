import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Modal, Button, notification  } from 'antd'
import { Flex, Box } from 'grid-styled'


const BondCard = styled.div `
  box-shadow: 0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2);
  border: thin double #EDEDED;
  padding: 5px;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

