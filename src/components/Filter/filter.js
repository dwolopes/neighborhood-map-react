import React, {Component} from 'react'
import {Navbar, FormGroup, FormControl} from 'react-bootstrap'

class Filter extends Component {
  render () {
    return (
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type='text' placeholder='Lugares' onChange={(event) => this.props.onChangeQuery(event.target.value)}/>
        </FormGroup>
        {' '}
      </Navbar.Form>
    )
  }
}

export default Filter
