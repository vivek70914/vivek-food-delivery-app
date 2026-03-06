"use client"

import { useState } from "react"
import { useAuth } from "./context/AuthContext"
import RestaurantCard from "./components/RestaurantCard"

export default function Home(){

const { user, login } = useAuth()
const [name,setName] = useState("")

const restaurants = [

{
id:1,
name:"Pizza Palace",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
rating:"4.5",
cuisine:"Pizza"
},

{
id:2,
name:"Burger Hub",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
rating:"4.3",
cuisine:"Burger"
},

{
id:3,
name:"Indian Spice",
image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe",
rating:"4.7",
cuisine:"Indian"
}

]

if(!user){

return(

<div
style={{
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#111",
color:"white"
}}
>

<h1>🍔 Vivek Food Delivery</h1>

<p style={{marginTop:"10px"}}>
Login to start ordering
</p>

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

<h2 style={{marginTop:"20px"}}>
Restaurants
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"20px"
}}
>

{restaurants.map((r)=>(
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

)

}