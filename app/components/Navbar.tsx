"use client"

import Link from "next/link"
import { useCart } from "../context/CartContext"

export default function Navbar() {

  const { cart } = useCart()

  return (
    <div
      style={{
        background:"orange",
        color:"white",
        padding:"15px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}
    >

      <h2>🍔 Vivek Food Delivery</h2>

      <div>

        <Link href="/">
          <span style={{marginRight:"20px", cursor:"pointer"}}>
            Home
          </span>
        </Link>

        <Link href="/cart">
          <span style={{cursor:"pointer"}}>
            Cart 🛒 ({cart.length})
          </span>
        </Link>

      </div>

    </div>
  )
}