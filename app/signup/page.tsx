"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage(){

  const router = useRouter()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function handleSignup(){

    alert("Signup Successful (Demo)")
    router.push("/login")

  }

  return(

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
          Create Account
        </h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"15px"}}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"15px"}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"20px"}}
        />

        <button
          onClick={handleSignup}
          style={{
            width:"100%",
            padding:"10px",
            background:"orange",
            border:"none",
            color:"white",
            cursor:"pointer"
          }}
        >
          Sign Up
        </button>

      </div>

    </div>

  )

}