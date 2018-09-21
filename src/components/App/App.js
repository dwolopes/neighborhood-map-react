import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import logo from './../../logo.svg';
import * as FourSquareAPI from '../../api/FourSquareAPI';
import Menu from './../Menu/Menu';
import Mapa from './../Mapa/Mapa';
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
              <Mapa
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBjj74PregS7fvpgtywObZ79sXiVRkI8vY&v=3.exp&libraries=geometry,drawing,places'
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Col>
          </Row>
      </div>
    );
  }
}
export default App;
