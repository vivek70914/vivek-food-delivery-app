"use client"

import Link from "next/link"
import { useCart } from "../context/CartContext"

export default function Navbar(){

  const { cart } = useCart()

  return(

    <div style={{
      background:"orange",
      padding:"15px",
      color:"white",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    }}>

      <h2>🍔 Vivek Food</h2>

      <div>

        <Link href="/" style={{marginRight:"20px"}}>
          Home
        </Link>

        <Link href="/cart" style={{marginRight:"20px"}}>
          Cart 🛒 ({cart.length})
        </Link>

        <Link href="/login" style={{marginRight:"20px"}}>
          Login
        </Link>

        <Link href="/signup">
          Signup
        </Link>

      </div>

    </div>

  )

}