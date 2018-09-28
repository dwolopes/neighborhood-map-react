import React from 'react';
const IconSel = require('../../images/iconSel.png');
const IconDef = require('../../images/iconDef.png');
const { compose, withStateHandlers } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require('react-google-maps')

const Mapa = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: -19.8779976, lng: -43.9549113 }}
  >
    {
      props.locations.map(location =>
        <Marker
          key={location.venue.id}
          position={{ lat: location.venue.location.lat, lng: location.venue.location.lng }}
          onClick={() => props.onToggleOpen(location.venue.id, props.isOpen)}
          icon={
            props.placeToShow === location.venue.id && props.isOpen
              ? { url: IconSel }
              : { url: IconDef }
          }
        >
          {props.isOpen && props.placeToShow === location.venue.id && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <h6>{location.venue.location.formattedAddress[0]}</h6>
              <h6>{location.venue.location.formattedAddress[1]}</h6>
            </div>
          </InfoWindow>}
        </Marker>
      )
    }
  </GoogleMap>
)

export default Mapa
