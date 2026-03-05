"use client"

import { useState } from "react"

export default function CartPage() {

  const [cart] = useState([
    { name: "Margherita Pizza", price: 250 },
    { name: "Veg Burger", price: 120 }
  ])

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div style={{ padding:"40px", fontFamily:"Arial" }}>

      <h1>Your Cart</h1>

      {cart.map((item, index)=>(
        <div key={index} style={{marginTop:"20px"}}>
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
        </div>
      ))}

      <h2 style={{marginTop:"30px"}}>Total: ₹ {total}</h2>

      <button
        style={{
          marginTop:"20px",
          background:"green",
          color:"white",
          border:"none",
          padding:"10px"
        }}
        onClick={()=>alert("Order Placed Successfully")}
      >
        Place Order
      </button>

    </div>
  )
}