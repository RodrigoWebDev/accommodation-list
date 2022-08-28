import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker"

interface Cordinates {
  lat: number
  lng: number
}

const Map = ({ lat, lng }: Cordinates) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 5
  };
  
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAroVYQsjCocZryzS13ra5yndO77lAABh0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker 
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map