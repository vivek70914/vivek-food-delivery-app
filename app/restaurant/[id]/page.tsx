"use client"

import { useState } from "react"

export default function RestaurantPage(){

const foodItems = [

{
name:"Margherita Pizza",
price:250,
image:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
},

{
name:"Farmhouse Pizza",
price:350,
image:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
},

{
name:"Veg Burger",
price:120,
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},

{
name:"Paneer Burger",
price:160,
image:"https://images.unsplash.com/photo-1550547660-d9450f859349"
},

{
name:"Butter Chicken",
price:320,
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
}

]

const [cart,setCart] = useState<any[]>([])

function addToCart(item:any){

setCart((prev)=>{

const exists = prev.find((i)=>i.name===item.name)

if(exists){

return prev.map((i)=>
i.name===item.name
? {...i, quantity:i.quantity+1}
: i
)

}

return [...prev,{...item,quantity:1}]

})

}

function removeItem(name:string){

setCart((prev)=>
prev
.map((i)=>
i.name===name
? {...i,quantity:i.quantity-1}
: i
)
.filter((i)=>i.quantity>0)
)

}

const total = cart.reduce(
(sum,item)=>sum + item.price * item.quantity,
0
)

return(

<div style={{padding:"40px",background:"#f6f6f6",minHeight:"100vh"}}>

<h1 style={{marginBottom:"30px"}}>
Restaurant Menu
</h1>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"20px"
}}
>

{foodItems.map((item,index)=>{

const cartItem = cart.find((c)=>c.name===item.name)

return(

<div
key={index}
style={{
background:"#fff",
borderRadius:"10px",
overflow:"hidden",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
}}
>

<img
src={item.image}
style={{
width:"100%",
height:"180px",
objectFit:"cover"
}}
/>

<div style={{padding:"15px"}}>

<h3>{item.name}</h3>

<p style={{color:"#666"}}>
₹ {item.price}
</p>

{!cartItem ? (

<button
onClick={()=>addToCart(item)}
style={{
marginTop:"10px",
background:"orange",
border:"none",
padding:"8px 15px",
color:"white",
cursor:"pointer",
borderRadius:"6px"
}}
>
Add
</button>

) : (

<div style={{display:"flex",gap:"10px",marginTop:"10px"}}>

<button
onClick={()=>removeItem(item.name)}
style={{
background:"orange",
border:"none",
color:"white",
padding:"5px 10px",
borderRadius:"5px"
}}
>
-
</button>

<span>{cartItem.quantity}</span>

<button
onClick={()=>addToCart(item)}
style={{
background:"orange",
border:"none",
color:"white",
padding:"5px 10px",
borderRadius:"5px"
}}
>
+
</button>

</div>

)}

</div>

</div>

)

})}

</div>

<div style={{marginTop:"40px"}}>

<h2>
Cart Items: {cart.length}
</h2>

<h2>
Total: ₹ {total}
</h2>

<button
style={{
marginTop:"15px",
background:"green",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"6px"
}}
onClick={()=>alert("Payment Successful")}
>
Checkout
</button>

</div>

</div>

)

}