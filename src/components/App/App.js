import React, { Component } from 'react';
import {Row, Col, Grid, Navbar, Image, FormGroup, NavItem, Nav, Alert, Button } from 'react-bootstrap';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as FourSquareAPI from '../../api/FourSquareAPI';
import Menu from '../Menu/Menu'
import Mapa from './../Mapa/Mapa';
import './App.css';
import Filter from '../Filter/Filter';
const IconLogo = require('../../images/neighborhood.png');

const NavBarStyle = {
  backgroundColor: '#e6e6e6'
}


class App extends Component {
  state = {
    error: null,
    isLoaded:false,
    places: [],
    query: '',
    isOpen: false,
    placeToShow: [],
  }


  componentDidMount() {
    FourSquareAPI.getPlace('coffee').then( places => {
      if(!places.error){
        this.setState({
          isLoaded: true,
          places: places.groups[0].items
        })
      } else {
        this.setState({
          isLoaded: false,
          places: [],
          error: true
        })
      }
    });
  }

  onChangeQuery = (query) => {
    this.setState(
      {
        query: query.trim()
      }
    );
  }

  onToggleMarker = (idPlace, flag) => {
    if(idPlace === this.state.placeToShow || flag === false) {
      this.setState({
          isOpen: !flag,
          placeToShow: idPlace
      })
    } else {
      this.setState({
        isOpen: flag,
        placeToShow: idPlace
      })
    }
  }

  render() {
    /**
     * Showing places are all places returned after a search.
     */
    let showingPlaces;
    showingPlaces = this.state.places;
    if(this.state.query){ 
      const match = new RegExp(escapeRegExp(this.state.query, 'i'))
      showingPlaces = this.state.places.filter(location => match.test(location.venue.name));
    }

    showingPlaces.sort(sortBy('venue.name'))

    return (
      <Grid>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/"><Image src={IconLogo} responsive /></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <FormGroup>
                <Navbar.Form pullLeft>
                  <Filter style={NavBarStyle} onChangeQuery={this.onChangeQuery} />
                </Navbar.Form>
              </FormGroup>
              <Nav>
                <NavItem eventKey={1} target="_blank" href="https://foursquare.com/">
                  FourSquareAPI
                </NavItem>
                <NavItem eventKey={2} target="_blank" href="https://developers.google.com/maps/documentation/?hl=pt-br">
                  Google API
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>; 
          {
            this.state.isLoaded ? (
              <Row className="show-grid">
                <Col md={5}>
                  <h3>Can I have a Coffee ?</h3>
                  {
                      showingPlaces.length > 0 ? (
                      <Menu 
                        locations={showingPlaces}
                        onChangeQuery = {this.onChangeQuery}
                        onToggleOpen={this.onToggleMarker}
                        isOpen = {this.state.isOpen}>
                      </Menu>
                    ) : ( 
                      <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                        <h4>Oh snap! You could find any term like you typed :( </h4>
                          <p> Try search again :) </p>
                      </Alert>
                    )
                  }
                  <span>Places recovered with <a target="_black" href="https://foursquare.com" >FourSqure API</a></span>
                </Col>
                <Col md={7}>
                  <Mapa
                    placeToShow={this.state.placeToShow}
                    onToggleOpen={this.onToggleMarker}
                    isOpen = {this.state.isOpen}
                    locations={showingPlaces}
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBjj74PregS7fvpgtywObZ79sXiVRkI8vY&v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </Col>
              </Row>

            ):(
              <center><h1>Loading...</h1></center>
            )
          }

          {
            this.state.error && 
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              <h4>Oh snap! You got an error!</h4>
              <p> We can't load your coffee places</p>
              <p>
                <Button href = '/' bsStyle="danger">Reload the page</Button>
              </p>
            </Alert>
          }
      </Grid>
    );
  }
}
export default App;
