import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { SubMenu } from './subMenu';


export const defaultMenu = () => (
  <Menu>
  <MenuItem>
    active
  </MenuItem>
  <MenuItem disabled>
    disabled
  </MenuItem>
  <SubMenu title="dropdown">
    <MenuItem>
      dropdown1
    </MenuItem>
    <MenuItem>
      dropdown2
    </MenuItem>
  </SubMenu>
  <MenuItem>
    link
  </MenuItem>
</Menu>
)

export const VerticalMenu = () => (
  <>
    <Menu mode="vertical" defaultOpenSubMenus={['223']}>
      <MenuItem>111</MenuItem>
      <SubMenu title="dropdown2" index={'122'}>
        <MenuItem>
          dropdown1
        </MenuItem>
        <MenuItem>
          dropdown2
        </MenuItem>
      </SubMenu>
      <MenuItem>333</MenuItem>
    </Menu>
  </>
)

storiesOf('Menu Component', module)
.add('Menu', defaultMenu )
.add('VerticalMenu', VerticalMenu)