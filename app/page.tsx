"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import RestaurantCard from "./components/RestaurantCard"
import SearchBar from "./components/SearchBar"
import LocationSelector from "./components/LocationSelector"
import { motion } from "framer-motion"

export default function Home(){

  const [search,setSearch] = useState("")

  const restaurants = [

    {
      id:1,
      name:"Pizza Palace",
      image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      rating:"4.5",
      cuisine:"Pizza"
    },

    {
      id:2,
      name:"Burger Hub",
      image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating:"4.3",
      cuisine:"Burger"
    },

    {
      id:3,
      name:"Indian Spice",
      image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      rating:"4.7",
      cuisine:"Indian"
    }

  ]

  const filteredRestaurants = restaurants.filter((r)=>
    r.name.toLowerCase().includes(search.toLowerCase())
  )

  return(

    <div className="bg-black text-white min-h-screen">

      <Navbar/>

      {/* HERO */}

      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">

        <motion.div
          animate={{ x:[-300,300,-300] }}
          transition={{ duration:6, repeat:Infinity }}
          className="text-7xl"
        >
          🛵
        </motion.div>

        <h1 className="text-5xl font-bold mt-6">
          Order Your Favourite Food 🍔
        </h1>

        <p className="text-gray-400 mt-2">
          Delivered fast… because waiting for food is the real tragedy.
        </p>

      </div>

      <LocationSelector/>

      <SearchBar search={search} setSearch={setSearch}/>

      {/* CATEGORY */}

      <div className="flex justify-center gap-10 text-center py-10">

        <div>
          <div className="text-4xl">🍕</div>
          Pizza
        </div>

        <div>
          <div className="text-4xl">🍔</div>
          Burger
        </div>

        <div>
          <div className="text-4xl">🍜</div>
          Chinese
        </div>

        <div>
          <div className="text-4xl">🥗</div>
          Healthy
        </div>

      </div>

      {/* RESTAURANTS */}

      <div className="px-10 pb-16">

        <h2 className="text-3xl mb-8">
          Popular Restaurants
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

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