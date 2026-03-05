"use client"

import { useCart } from "../../context/CartContext"

export default function RestaurantPage() {

  const { cart, addToCart } = useCart()

  const restaurant = {
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: "4.5",
    banner: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  }

  const foodItems = [
    {
      name: "Margherita Pizza",
      price: 250,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
    },
    {
      name: "Farmhouse Pizza",
      price: 350,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
    },
    {
      name: "Veg Burger",
      price: 120,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      name: "Paneer Burger",
      price: 160,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      name: "Butter Chicken",
      price: 320,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    }
  ]

  const total = cart.reduce(
    (sum:number,item:any)=>sum + item.price * item.quantity,
    0
  )

  return (

    <div style={{fontFamily:"Arial"}}>

      {/* Restaurant Banner */}

      <div
        style={{
          height:"250px",
          backgroundImage:`url(${restaurant.banner})`,
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}
      />

      {/* Restaurant Details */}

      <div style={{padding:"30px"}}>

        <h1>{restaurant.name}</h1>

        <p>{restaurant.cuisine}</p>

        <p style={{color:"green"}}>
          ⭐ {restaurant.rating}
        </p>

        <h2 style={{marginTop:"30px"}}>Menu</h2>

        {/* Menu Items */}

        {foodItems.map((item,index)=>(

          <div
            key={index}
            style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              marginTop:"20px",
              borderBottom:"1px solid #eee",
              paddingBottom:"10px"
            }}
          >

            <div>

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <button
                onClick={()=>addToCart(item)}
                style={{
                  background:"orange",
                  border:"none",
                  padding:"8px",
                  color:"white",
                  cursor:"pointer"
                }}
              >
                Add to Cart
              </button>

            </div>

            <img
              src={item.image}
              style={{
                width:"100px",
                height:"80px",
                objectFit:"cover",
                borderRadius:"10px"
              }}
            />

          </div>

        ))}

        {/* Cart Summary */}

        <h3 style={{marginTop:"30px"}}>
          Cart Items: {cart.length}
        </h3>

        <h3>Total: ₹ {total}</h3>

      </div>

    </div>

  )

}