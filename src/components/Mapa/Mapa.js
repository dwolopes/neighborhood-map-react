import React from 'react';
const { compose, withStateHandlers } = require('recompose');
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
  {
    props.locations.map(location => 
      <Marker
        key = {location.venue.id}
        position={{ lat: location.venue.location.lat, lng: location.venue.location.lng }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <p>Texto</p>
        </InfoWindow>}
      </Marker>
    )
  }
  </GoogleMap>
)

export default Mapa;
