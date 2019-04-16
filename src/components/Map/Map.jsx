import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map
          google={this.props.google} 
          zoom={3}
          initialCenter={{
            lat: 30.2683845,
            lng: -97.74300649999999
          }}
        >
        {this.props.markers.map((marker, idx) =>  {
          return (<Marker
          key={idx}
          position={{lat: marker.lat, lng: marker.lng}} />)
        })}
 
        
        </Map>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  v: "3"
})(MapContainer)