import styled, { injectGlobal } from 'styled-components'
import { Menu as AntdMenu } from 'antd'

/**
 * Menu with selectable items. See antd website for more details on available
 * props https://ant.design/components/menu/
 * Extra props that aren't mentioned on the site (but can be found in rc-menu):
 * @prop {[string]} activeKey initial and current active menu item's key
 */
const Menu = styled(AntdMenu)`
  && {
    border-radius: 0;
    color: #136ACD;
  }

  &.ant-menu-vertical {
    border-right: none;
  }

  &.ant-menu-horizontal > .ant-menu-item:hover,
  &.ant-menu-horizontal > .ant-menu-submenu:hover,
  &.ant-menu-horizontal > .ant-menu-item-active,
  &.ant-menu-horizontal > .ant-menu-submenu-active,
  &.ant-menu-horizontal > .ant-menu-item-open,
  &.ant-menu-horizontal > .ant-menu-submenu-open,
  &.ant-menu-horizontal > .ant-menu-item-selected,
  &.ant-menu-horizontal > .ant-menu-submenu-selected {
    border-bottom: 2px solid #1C88C3;
    color: #1C88C3;
  }

  &.ant-menu-horizontal > .ant-menu-item > a:hover,
  &.ant-menu-horizontal > .ant-menu-submenu > a:hover {
      color: #1C88C3;
  }

  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-item:hover,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-submenu:hover,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-active,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-submenu-active,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-open,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-submenu-open,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-item-selected,
  &.ant-menu:not(.ant-menu-horizontal) > .ant-menu-submenu-selected {
    color: #136ACD;
    background-color: #FBFBFB;
    ${'' /* border-right: 1px solid #1C88C3; */}
  }

  &&.ant-menu-inline .ant-menu-item {
    height: auto;
    padding: 10px 0px;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    line-height: 30px !important;
  }

  &&.ant-menu-vertical .ant-menu-item, .ant-menu-inline .ant-menu-item,
  .ant-menu-vertical .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-submenu-title {
     background-color: #1C88C3;
     color: #136ACD;
     font-style: italic;
     letter-spacing: 1px;
   }
   &&.ant-menu-submenu-inline .ant-menu-submenu {
     background-color: #1C88C3;
     color: #136ACD;
   }

   &&.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
     ${'' /* background-color: #1C88C3; */}
     color: #1C88C3;
   }

   &&.ant-menu-inline .ant-menu-item:after, .ant-menu-vertical .ant-menu-item:after {
     border-right: 3px solid #1C88C3;
   }

   &&.ant-menu-item > a:hover {
     color: #136ACD !important;
   }
`

// NB HACK this is hacky and should be fixed - basically don't have acces to theme in injectGlobal
// injectGlobal`
//   &&.ant-menu-root.ant-menu-vertical, .ant-menu-root.ant-menu-inline  {
//     background-color: #212528;
//     color: white;
//   }
//
//   &&.ant-menu-root.ant-menu-vertical, .ant-menu-root.ant-menu-inline {
//     border: none;
//   }
//
//   &&.ant-menu-item-group-title {
//     color: #FFB582;
//     font-size: 10px;
//     font-style: italic;
//     background: #2F3136;
//     line-height: 1.5;
//     padding: 12px 0px 0px;
//   }
// `

const MenuItem = styled(AntdMenu.Item)`
  && {
    display: flex;
    align-items: center;

    &.ant-dropdown-menu-item:last-child {
      border-radius: 0;
    }
  }
`

Menu.Item = MenuItem
Menu.ItemGroup = AntdMenu.ItemGroup
Menu.SubMenu = AntdMenu.SubMenu

export default Menu
