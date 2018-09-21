import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import logo from './../../logo.svg';
import * as FourSquareAPI from '../../api/FourSquareAPI';
import Menu from './../Menu/Menu'
import './App.css';

class App extends Component {
  state = {
    error: null,
    isLoaded:false,
    places: []
  }

  componentDidMount() {
    FourSquareAPI.getPlace('coffee').then( places => {
      if(!('error' in places)){
        this.setState({
          isLoaded: true,
          places: places.groups[0].items
        })
      } else {
        this.setState({
          isLoaded: false,
          places: []
        })
      }
    });
  }

  render() {
    return (
      <div>
          <Row className="show-grid">
            <Col md={3}>
              <Menu locations={this.state.places}></Menu>
            </Col>
            <Col md={9}>
              Mapa
            </Col>
          </Row>
      </div>
    );
  }
}
export default App;
