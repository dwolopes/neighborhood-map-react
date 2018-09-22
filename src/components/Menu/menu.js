import React, {Component} from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Filter from './../Filter/Filter'

class Menu extends Component {
  render () {
    return (
      <div>
        <Nav stacked>
          <Filter onChangeQuery = {this.props.onChangeQuery}></Filter>
          <Navbar>
            {
              this.props.locations.map(location => <NavItem key={location.referralId}>{location.venue.name}</NavItem>)
            }
          </Navbar>
        </Nav>
      </div>
    )
  }
}

export default Menu
