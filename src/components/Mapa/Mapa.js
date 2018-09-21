import React, {Component} from 'react';
const { compose, withProps, withStateHandlers } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require('react-google-maps')

const Mapa = compose(
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: -19.8779976, lng: -43.9549113 }}
  >
    <Marker
      position={{ lat: -19.878495, lng: -43.9336247 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        Texto
      </InfoWindow>}
    </Marker>
  </GoogleMap>
)

export default Mapa;
