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
        center={[positionLat ,positionLong]}
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
        <Marker position={[positionLat ,positionLong]}>
          <Popup>
           Для разной информации
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default MyMap