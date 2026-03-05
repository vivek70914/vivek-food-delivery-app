"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import RestaurantCard from "./components/RestaurantCard"
import { motion } from "framer-motion"

export default function Home(){

  const [search,setSearch] = useState("")
  const [ratingFilter,setRatingFilter] = useState(0)
  const [loading,setLoading] = useState(false)

  const restaurants = [

    {
      id:1,
      name:"Pizza Palace",
      image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      rating:4.5,
      cuisine:"Pizza",
      distance:"2.1 km"
    },

    {
      id:2,
      name:"Burger Hub",
      image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating:4.3,
      cuisine:"Burger",
      distance:"1.4 km"
    },

    {
      id:3,
      name:"Indian Spice",
      image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      rating:4.7,
      cuisine:"Indian",
      distance:"3.5 km"
    }

  ]

  const filteredRestaurants = restaurants
  .filter((r)=>r.name.toLowerCase().includes(search.toLowerCase()))
  .filter((r)=>r.rating >= ratingFilter)

  return(

    <div className="bg-gray-50 min-h-screen text-black">

      <Navbar/>

      {/* HERO */}

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
          className="p-3 w-[350px] rounded-lg border"
        />

      </div>

      {/* FILTER */}

      <div className="flex justify-center gap-4 mt-6">

        <button
        onClick={()=>setRatingFilter(4)}
        className="px-4 py-2 bg-orange-400 text-white rounded">
          ⭐ 4+
        </button>

        <button
        onClick={()=>setRatingFilter(4.5)}
        className="px-4 py-2 bg-orange-500 text-white rounded">
          ⭐ 4.5+
        </button>

        <button
        onClick={()=>setRatingFilter(0)}
        className="px-4 py-2 bg-gray-300 rounded">
          Reset
        </button>

      </div>

      {/* RESTAURANTS */}

      <div className="px-10 mt-10">

        <h2 className="text-2xl font-semibold mb-6">
          Popular Restaurants
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

          {loading ?

            [...Array(3)].map((_,i)=>(
              <div
                key={i}
                className="h-[200px] bg-gray-200 animate-pulse rounded"
              />
            ))

          :

            filteredRestaurants.map((r)=>(

              <div key={r.id}>

                <RestaurantCard
                  id={r.id}
                  name={r.name}
                  image={r.image}
                  rating={`${r.rating} ⭐`}
                  cuisine={`${r.cuisine} • ${r.distance}`}
                />

              </div>

            ))

          }

        </div>

      </div>

    </div>

  )

}