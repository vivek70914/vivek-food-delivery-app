"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MapView(){

  const position:[number,number] = [22.3072,73.1812] // Vadodara

  return(

    <div className="mt-10">

      <MapContainer
        center={position}
        zoom={13}
        style={{height:"300px",width:"100%"}}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Delivery available here
          </Popup>
        </Marker>

      </MapContainer>

    </div>

  )

}