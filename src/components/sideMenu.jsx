import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import Menu from './antMenu'

const StyledMenuContainer = styled.div`
  display: flex;
`

const StyledMenu = styled(Menu)`
  height: calc(100vh - 50px);

  && li {
    line-height: 80px !important;
    height: 80px !important;
    font-family: Avenir Next;
  }
`

const StyledCollapseButton = styled(Button)`
  margin-left: 10px;
  margin-top: 10px;
`
const StyledIcon = styled(Icon)`
  font-size: 20px;
`
const StyledNavLink = styled(NavLink)`
  && {
    color: black;
  }

  &&.selected {
    letter-spacing: 1px;
    color: white;
  }
`

class SideMenu extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <StyledMenuContainer style={{ width: 240 }}>
        <StyledMenu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          // theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <StyledIcon type="area-chart" />
            <StyledNavLink
              to="/dashboard"
              activeClassName="selected"
            >
                <p>Dashboard</p>
            </StyledNavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <StyledIcon type="swap" />
            <StyledNavLink
              to="/buy"
              activeClassName="selected"
            >
              Buy/Sell
            </StyledNavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <StyledIcon type="setting" />
            <span>Settings</span>
          </Menu.Item>
        </StyledMenu>
        {/* <StyledCollapseButton type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </StyledCollapseButton> */}
      </StyledMenuContainer>
    );
  }
}

export default SideMenu
