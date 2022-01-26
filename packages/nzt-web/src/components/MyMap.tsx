import { MapConsumer, MapContainer } from 'react-leaflet'
function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MapConsumer>
        {(map) => {
          console.log('map center:', map.getCenter())
          return null
        }}
      </MapConsumer>
    </MapContainer>
  )
}

export default MyMapComponent
