"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import RestaurantCard from "./components/RestaurantCard"
import MapView from "./components/MapView"
import { motion } from "framer-motion"

export default function Home(){

  const [search,setSearch] = useState("")

  const restaurants = [

    {
      id:1,
      name:"Pizza Palace",
      image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      rating:"4.5",
      cuisine:"Pizza • 2.1 km"
    },

    {
      id:2,
      name:"Burger Hub",
      image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating:"4.3",
      cuisine:"Burger • 1.4 km"
    },

    {
      id:3,
      name:"Indian Spice",
      image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      rating:"4.7",
      cuisine:"Indian • 3.5 km"
    }

  ]

  const filtered = restaurants.filter((r)=>
    r.name.toLowerCase().includes(search.toLowerCase())
  )

  return(

    <div className="bg-gray-100 min-h-screen">

      <Navbar/>

      {/* HERO SECTION */}

      <div className="flex flex-col items-center justify-center h-[50vh] text-center px-6">

        <motion.div
          animate={{ x:[-200,200,-200] }}
          transition={{ duration:5, repeat:Infinity }}
          className="text-6xl"
        >
          🛵
        </motion.div>

        <h1 className="text-4xl font-bold mt-6">
          Order Your Favourite Food 🍔
        </h1>

        <p className="text-gray-600 mt-2">
          Delivered fast… because waiting for food is the real tragedy.
        </p>

      </div>

      {/* SEARCH */}

      <div className="flex justify-center mt-6">

        <input
          placeholder="Search restaurants..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="p-3 w-[350px] rounded-lg border shadow"
        />

      </div>

      {/* CATEGORY */}

      <div className="flex overflow-x-auto gap-10 px-10 mt-10 text-center">

        <div className="min-w-[80px]">
          <div className="text-3xl">🍕</div>
          Pizza
        </div>

        <div className="min-w-[80px]">
          <div className="text-3xl">🍔</div>
          Burger
        </div>

        <div className="min-w-[80px]">
          <div className="text-3xl">🍜</div>
          Chinese
        </div>

        <div className="min-w-[80px]">
          <div className="text-3xl">🥗</div>
          Healthy
        </div>

        <div className="min-w-[80px]">
          <div className="text-3xl">🍛</div>
          Indian
        </div>

      </div>

      {/* RESTAURANTS */}

      <div className="px-10 mt-12">

        <h2 className="text-2xl font-semibold mb-6">
          Popular Restaurants
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

          {filtered.map((r)=>(
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

      {/* MAP */}

      <div className="px-10 mt-16 pb-16">

        <h2 className="text-2xl font-semibold mb-4">
          Delivery Area
        </h2>

        <MapView/>

      </div>

    </div>

  )

}