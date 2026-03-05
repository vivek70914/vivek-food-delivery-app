"use client"

import { useState } from "react"
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
      category: "Pizza"
    },
    {
      id: 2,
      name: "Burger Hub",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: "4.3",
      cuisine: "Burgers, Fast Food",
      category: "Burger"
    },
    {
      id: 3,
      name: "Indian Spice",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      rating: "4.7",
      cuisine: "Indian, Curry",
      category: "Indian"
    },
    {
      id: 4,
      name: "Pasta Corner",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
      rating: "4.4",
      cuisine: "Italian, Pasta",
      category: "Pasta"
    },
    {
      id: 5,
      name: "Biryani House",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      rating: "4.6",
      cuisine: "Biryani, Indian",
      category: "Biryani"
    }
  ]

  const [search,setSearch] = useState("")
  const [category,setCategory] = useState("All")

  const filteredRestaurants = restaurants.filter((r)=>{

    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase())

    const matchCategory =
      category === "All" || r.category === category

    return matchSearch && matchCategory

  })

  return (

    <div>

      <Navbar />

      <div style={{padding:"30px",fontFamily:"Arial"}}>

        <h1 style={{marginBottom:"20px"}}>
          Restaurants
        </h1>

        {/* Category Buttons */}

        <div style={{marginBottom:"20px"}}>

          <button onClick={()=>setCategory("All")}>All</button>
          <button onClick={()=>setCategory("Pizza")}>Pizza</button>
          <button onClick={()=>setCategory("Burger")}>Burger</button>
          <button onClick={()=>setCategory("Indian")}>Indian</button>
          <button onClick={()=>setCategory("Biryani")}>Biryani</button>

        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{
            padding:"10px",
            width:"100%",
            maxWidth:"400px",
            marginBottom:"30px"
          }}
        />

        {/* Responsive Grid */}

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"20px"
          }}
        >

          {filteredRestaurants.map((r)=>(
            <RestaurantCard
              key={r.id}
              id={r.id}
              name={r.name}
              image={r.image}
              rating={r.rating}
              cuisine={r.cuisine}
            />
          ))}

        </div>

      </div>

    </div>

  )

}