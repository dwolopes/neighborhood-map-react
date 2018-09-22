import React, {Component} from 'react'
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'

class Filter extends Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type='text' placeholder='Lugares' onChange={(event) => this.props.onChangeQuery(event.target.value)}/>
            </FormGroup>{' '}
          </Navbar.Form>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default Filter
