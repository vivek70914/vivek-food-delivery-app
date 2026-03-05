"use client"

import RestaurantCard from "./components/RestaurantCard"

export default function Home() {

const restaurants = [

{
id:1,
name:"Pizza Palace",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
rating:"4.5",
cuisine:"Pizza • 2.1 km"
},

{
id:2,
name:"Burger Hub",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
rating:"4.3",
cuisine:"Burger • 1.4 km"
},

{
id:3,
name:"Indian Spice",
image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe",
rating:"4.7",
cuisine:"Indian • 3.5 km"
},

{
id:4,
name:"Bikanervala",
image:"https://images.unsplash.com/photo-1604908177522-402f63a0b2c6",
rating:"4.4",
cuisine:"North Indian • 2.8 km"
},

{
id:5,
name:"Haldiram's",
image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
rating:"4.6",
cuisine:"Indian Snacks • 3.1 km"
},

{
id:6,
name:"Barbeque Nation",
image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
rating:"4.5",
cuisine:"BBQ • 4.0 km"
},

{
id:7,
name:"KFC",
image:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
rating:"4.2",
cuisine:"Fried Chicken • 1.9 km"
},

{
id:8,
name:"Domino's Pizza",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
rating:"4.4",
cuisine:"Pizza • 2.2 km"
},

{
id:9,
name:"McDonald's",
image:"https://images.unsplash.com/photo-1550547660-d9450f859349",
rating:"4.3",
cuisine:"Burger • 2.5 km"
},

{
id:10,
name:"Saravana Bhavan",
image:"https://images.unsplash.com/photo-1630383249896-424e482df921",
rating:"4.7",
cuisine:"South Indian • 3.3 km"
},

{
id:11,
name:"Dosa Plaza",
image:"https://images.unsplash.com/photo-1617692855027-33b14f061079",
rating:"4.4",
cuisine:"South Indian • 2.6 km"
},

{
id:12,
name:"Punjabi Tadka",
image:"https://images.unsplash.com/photo-1601050690597-df0568f70950",
rating:"4.6",
cuisine:"North Indian • 2.0 km"
},

{
id:13,
name:"Behrouz Biryani",
image:"https://images.unsplash.com/photo-1563379091339-03246963d96c",
rating:"4.8",
cuisine:"Biryani • 2.7 km"
},

{
id:14,
name:"Paradise Biryani",
image:"https://images.unsplash.com/photo-1604908177522-402f63a0b2c6",
rating:"4.6",
cuisine:"Hyderabadi • 3.8 km"
},

{
id:15,
name:"Wow Momo",
image:"https://images.unsplash.com/photo-1604908176997-431c8e7b3b8e",
rating:"4.3",
cuisine:"Chinese • 2.3 km"
},

{
id:16,
name:"Subway",
image:"https://images.unsplash.com/photo-1550547660-d9450f859349",
rating:"4.2",
cuisine:"Healthy • 2.9 km"
},

{
id:17,
name:"La Pino'z Pizza",
image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65",
rating:"4.4",
cuisine:"Pizza • 1.8 km"
},

{
id:18,
name:"The Belgian Waffle",
image:"https://images.unsplash.com/photo-1505250469679-203ad9ced0cb",
rating:"4.7",
cuisine:"Dessert • 3.0 km"
}

]

return (

<div style={{padding:"40px",background:"#111",minHeight:"100vh"}}>

<h1 style={{
fontSize:"36px",
color:"white",
marginBottom:"30px"
}}>
🍔 Vivek Food Delivery App
</h1>

<div style={{

display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"25px"

}}>

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