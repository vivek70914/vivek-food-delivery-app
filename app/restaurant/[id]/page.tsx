"use client"

import { useParams } from "next/navigation"

export default function RestaurantPage(){

  const params = useParams()

  const id = params.id

  return(

    <div style={{padding:"40px"}}>

      <h1>Restaurant Menu</h1>

      <p>You opened restaurant ID: {id}</p>

      <h2 style={{marginTop:"20px"}}>Menu Items</h2>

      <ul style={{marginTop:"10px"}}>

        <li>Margherita Pizza — ₹250</li>
        <li>Farmhouse Pizza — ₹350</li>
        <li>Veg Burger — ₹120</li>
        <li>Paneer Burger — ₹160</li>
        <li>Butter Chicken — ₹320</li>

      </ul>

    </div>

  )

}