"use client"

import Link from "next/link"
import { useCart } from "../context/CartContext"

export default function Navbar(){

  const { cart } = useCart()

  return(

    <div className="flex justify-between items-center px-6 py-4 bg-orange-500 text-white">

      <h2 className="font-bold text-lg">
        🍔 Vivek Food
      </h2>

      <div className="flex gap-6">

        <Link href="/">Home</Link>

        <Link href="/cart">
          Cart ({cart.length})
        </Link>

        <Link href="/login">Login</Link>

        <Link href="/signup">Signup</Link>

      </div>

    </div>

  )

}