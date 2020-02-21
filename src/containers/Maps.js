// import React, { Component } from 'react';

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const mapStyle = {
//      width: '62%',
//      height: '90%',
//      position: 'relative',
//      marginLeft: '110px',
//      'marginTop': '18px'
   
//    }

//    export class MapContainer extends Component {

//      render() {
//        let positionLat = "-64.0031";
//        let positionLong = "-74.1043";
   
//      //   if (this.props.coords) {
//      //     positionLat = this.props.coords.iss_position.latitude;
//      //     positionLong = this.props.coords.iss_position.longitude;
   
//      //   }
//        return (
//          <div className="Map">
//            <Map
//              google={this.props.google}
//              zoom={4}
//              style={mapStyle}
//              center={{
//                lat: positionLat,
//                lng: positionLong
//              }}
//            >
   
//              <Marker position={
//                  { lat: positionLat,
//                    lng: positionLong}
//                  } />
    
   
//            </Map>
//          </div>
//        );
//      }
//    }

//    export default GoogleApiWrapper({
//      apiKey: ('AIzaSyBxaY-Jn_4QBOcDJzOKU2xLxFiLafg1ci4')
//      // apiKey: (' AIzaSyC5ivNcw4xCiP-Md7SPD7yfbboDBwVs0Bc')
    
//    })(MapContainer)

import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class MyMap extends React.Component {
  render() {
    
 
     if (!this.props.сoordinate) {
          return null
     }
      const positionLat = this.props.сoordinate.iss_position.latitude;
      const positionLong = this.props.сoordinate.iss_position.longitude;
     
     console.log(positionLat)
    return (
      <LeafletMap
        center={[positionLong,positionLat]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[positionLong,positionLat]}>
          <Popup>
           Для разной информации
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default MyMap