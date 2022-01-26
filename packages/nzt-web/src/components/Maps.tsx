import { Flex } from '@chakra-ui/layout'
import { Container, useInterval } from '@chakra-ui/react'
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export type MapProps = {
  markers: [number, number, string][]
  hello: string
}

export const Maps = ({ markers, hello }: MapProps) => {
  // delete L.Icon.Default.prototype._getIconUrl

  const ICON = icon({
    iconUrl: 'icon/marker-icon.png',
    iconSize: [25, 41],
  })

  const center = {
    lat: 18.776683,
    lng: 98.985075,
  }

  // const [rectangle, setRectangle] = React.useState([[18.776683, 98.985075]])

  useInterval(() => {
    // console.log('tick')
    // console.log(markers, hello)
    // [51.5, -0.06],
    // rectangle.push([18.776683, 98.985075])
    // setRectangle([...rectangle, [17.776683, 98.985075]])
  }, 1000)

  return (
    <>
        <MapContainer center={center} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers?.map(([lat, lng, name], i) => (
            <Marker key={i} position={[lat, lng]} icon={ICON}>
              <Popup>
                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                {name}
              </Popup>
            </Marker>
          ))}
          {/* <Marker icon={ICON} position={rectangle[0]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
    </>
  )
}

export default Maps
