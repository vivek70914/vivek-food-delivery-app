"use client"

import Link from "next/link"

type Props = {
  id: number
  name: string
  image: string
  rating: string
  cuisine: string
}

export default function RestaurantCard({
  id,
  name,
  image,
  rating,
  cuisine
}: Props) {

  return (

    <div
      style={{
        borderRadius:"12px",
        overflow:"hidden",
        background:"#fff",
        color:"#000",
        cursor:"pointer"
      }}
    >

      <img
        src={image}
        style={{
          width:"100%",
          height:"180px",
          objectFit:"cover"
        }}
      />

      <div style={{padding:"12px"}}>

        <h3>{name}</h3>

        <p style={{color:"#666"}}>
          {cuisine}
        </p>

        <p style={{color:"green"}}>
          ⭐ {rating}
        </p>

        <Link href={`/restaurant/${id}`}>

          <button
            style={{
              marginTop:"10px",
              background:"orange",
              border:"none",
              padding:"8px",
              color:"white",
              cursor:"pointer",
              borderRadius:"6px"
            }}
          >
            View Menu
          </button>

        </Link>

      </div>

    </div>

  )
}