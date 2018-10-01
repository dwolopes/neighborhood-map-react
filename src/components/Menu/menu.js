import React, {Component} from 'react'
import {Nav, NavItem, Alert } from 'react-bootstrap'
import './Menu.css';

const NavBarStyle = {
  backgroundColor: '#e6e6e6'
}

class Menu extends Component {

  handleSelect = (placeData) => this.props.onToggleOpen(placeData[0], placeData[1]);
  
  render () {
    return (
      <aside>
        {
          this.props.locations.length > 0  ? (
          <Nav bsStyle="pills" stacked onSelect={(placeData) => this.handleSelect(placeData)}>
              {
                this.props.locations.map(location =>
                  <NavItem
                    eventKey={[location.venue.id, this.props.isOpen]}
                    key={location.venue.id}>
                      {location.venue.name}
                  </NavItem>
                )
              }
            <hr/>
          </Nav>
        ): (
          
          <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
            <h4>Oh snap! You could find any term like you typed :( </h4>
              <p> Try search again :) </p>
          </Alert>
        )}
      </aside>
    )
  }
}

export default Menu
