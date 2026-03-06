"use client"

import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard"
import SearchBar from "./components/SearchBar"

export default function Home(){

const [search,setSearch] = useState("")

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
},

{
id:4,
name:"Haldiram's",
image:"https://images.unsplash.com/photo-1604908177522-402f63a0b2c6",
rating:"4.6",
cuisine:"Snacks"
},

{
id:5,
name:"Barbeque Nation",
image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
rating:"4.5",
cuisine:"BBQ"
},

{
id:6,
name:"Saravana Bhavan",
image:"https://images.unsplash.com/photo-1630383249896-424e482df921",
rating:"4.7",
cuisine:"South Indian"
}

]

const filteredRestaurants = restaurants.filter((r)=>
r.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div style={{padding:"40px",background:"#111",minHeight:"100vh"}}>

<h1 style={{color:"white",marginBottom:"20px"}}>
🍔 Vivek Food Delivery
</h1>

<SearchBar
value={search}
onChange={setSearch}
/>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"20px"
}}>

{filteredRestaurants.map((r)=>(
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