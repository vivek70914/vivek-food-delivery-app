"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MapView() {

  const position: [number, number] = [22.3072, 73.1812] // Vadodara

  return (

    <div style={{marginTop:"30px"}}>

      <MapContainer
        center={position as any}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Your Delivery Location
          </Popup>
        </Marker>

      </MapContainer>

    </div>

  )
}