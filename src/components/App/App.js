import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';
import logo from './../../logo.svg';
import * as FourSquareAPI from '../../api/FourSquareAPI';
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
          places: places
        })
        console.log(this.state);
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
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
export default App;
