"use client"

import Navbar from "./components/Navbar"
import RestaurantCard from "./components/RestaurantCard"

export default function Home() {

  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      rating: "4.5",
      cuisine: "Pizza, Italian",
      time: "30 mins"
    },
    {
      id: 2,
      name: "Burger Hub",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: "4.3",
      cuisine: "Burgers, Fast Food",
      time: "25 mins"
    },
    {
      id: 3,
      name: "Indian Spice",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      rating: "4.7",
      cuisine: "Indian, Curry",
      time: "35 mins"
    }
  ]

  return (

    <div>

      <Navbar />

      {/* HERO SECTION */}

      <div style={{
        padding:"60px",
        textAlign:"center",
        background:"#fafafa",
        fontFamily:"Arial"
      }}>

        <h1 style={{fontSize:"42px"}}>
          Order Your Favourite Food 🍔
        </h1>

        <p style={{color:"#666",marginTop:"10px"}}>
          Delivered fast… because waiting for food is the real tragedy.
        </p>

      </div>

      {/* CATEGORY SECTION */}

      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"40px",
        padding:"30px",
        fontSize:"24px"
      }}>

        <div>🍕 Pizza</div>
        <div>🍔 Burger</div>
        <div>🍜 Chinese</div>
        <div>🥗 Healthy</div>
        <div>🍛 Indian</div>

      </div>

      {/* RESTAURANTS */}

      <div style={{
        padding:"40px",
        fontFamily:"Arial"
      }}>

        <h2 style={{marginBottom:"20px"}}>
          Popular Restaurants
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          {restaurants.map((r)=>(
            <RestaurantCard
              key={r.id}
              id={r.id}
              name={r.name}
              image={r.image}
              rating={`${r.rating} • ${r.time}`}
              cuisine={r.cuisine}
            />
          ))}

        </div>

      </div>

    </div>

  )

}