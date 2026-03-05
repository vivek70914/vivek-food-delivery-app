"use client"

import { useState } from "react"

export default function LoginPage() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function handleLogin(){
    alert("Login Successful (Demo)")
  }

  return (

    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      fontFamily:"Arial"
    }}>

      <div style={{
        width:"350px",
        padding:"30px",
        border:"1px solid #eee",
        borderRadius:"10px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{marginBottom:"20px"}}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"15px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"10px",
            background:"orange",
            border:"none",
            color:"white",
            cursor:"pointer"
          }}
        >
          Login
        </button>

      </div>

    </div>

  )
}