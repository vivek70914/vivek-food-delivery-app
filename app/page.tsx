"use client"

import { useState } from "react"
import { useAuth } from "./context/AuthContext"

export default function Home(){

  const { user, login } = useAuth()
  const [name,setName] = useState("")

  if(!user){

    return(

      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        flexDirection:"column",
        background:"#111",
        color:"white"
      }}>

        <h1>🍔 Vivek Food Delivery</h1>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{
            marginTop:"20px",
            padding:"10px",
            borderRadius:"6px"
          }}
        />

        <button
          onClick={()=>login(name)}
          style={{
            marginTop:"15px",
            background:"orange",
            border:"none",
            padding:"10px 20px",
            color:"white",
            borderRadius:"6px"
          }}
        >
          Login
        </button>

      </div>

    )

  }

  return(

    <div style={{padding:"40px"}}>

      <h1>Welcome {user.name}</h1>

      <p>Select a restaurant to start ordering.</p>

    </div>

  )

}