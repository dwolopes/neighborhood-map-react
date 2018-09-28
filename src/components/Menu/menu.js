import React, {Component} from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import Filter from '../Filter/Filter'
import './Menu.css'

const NavBarStyle = {
  backgroundColor: '#e6e6e6'
}

class Menu extends Component {
  render () {
    return (
      <div>
        <Nav stacked>
          <Filter style={NavBarStyle} onChangeQuery={this.props.onChangeQuery} />
          <Navbar>
            {
              this.props.locations.map(location =>
                <NavItem>
                  <Button
                    bsStyle='custom'
                    bsSize='large'
                    onClick={() => this.props.onToggleOpen(location.venue.id, this.props.isOpen)}
                    key={location.referralId}>
                    {location.venue.name}
                  </Button>
                </NavItem>
              )
            }
          </Navbar>
        </Nav>
      </div>
    )
  }
}

export default Menu
