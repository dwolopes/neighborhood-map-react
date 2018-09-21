import React, {Component} from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Filter from './../Filter/Filter'

class Menu extends Component {
  render () {
    return (
      <div>
        <Nav stacked>
          <Filter />
          <Navbar>
            <NavItem href='/home'>
                NavItem 1 content
            </NavItem>
            <NavItem href='/home'>
                NavItem 2 content
            </NavItem>
            <NavItem href='/home'>
                NavItem 3 content
            </NavItem>
            <NavItem href='/home'>
                NavItem 4 content
            </NavItem>
            <NavItem href='/home'>
                NavItem 5 content
            </NavItem>
            <NavItem href='/home'>
                NavItem 6 content
            </NavItem>
            <Nav />
          </Navbar>
        </Nav>
      </div>
    )
  }
}

export default Menu
