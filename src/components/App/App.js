import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as FourSquareAPI from '../../api/FourSquareAPI';
import Menu from './../Menu/Menu'
import Mapa from './../Mapa/Mapa';
import './App.css';

class App extends Component {
  state = {
    error: null,
    isLoaded:false,
    places: [],
    query: ''
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

  onChangeQuery = (query) => { 
    this.setState({query: query.trim()});
  }

  render() {
    let showingPlaces;
    if(this.state.query){ 
      const match = new RegExp(escapeRegExp(this.state.query, 'i'))
      showingPlaces = this.state.places.filter(location => match.test(location.venue.name));
    }else {
      showingPlaces = this.state.places;
    }

    showingPlaces.sort(sortBy('venue.name'));

    console.log(showingPlaces);

    return (
      <div>
          <Row className="show-grid">
            <Col md={3}>
              <Menu locations={showingPlaces} onChangeQuery = {this.onChangeQuery}></Menu>
            </Col>
            <Col md={9}>
              <Mapa
                locations={showingPlaces}
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
