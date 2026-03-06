"use client"

export default function MapView() {

  return (

    <div style={{marginTop:"40px"}}>

      <h2 style={{marginBottom:"15px"}}>Delivery Area</h2>

      <iframe
        src="https://maps.google.com/maps?q=Vadodara&t=&z=13&ie=UTF8&iwloc=&output=embed"
        style={{
          width:"100%",
          height:"350px",
          border:"0",
          borderRadius:"12px"
        }}
        loading="lazy"
      />

    </div>

  )

}