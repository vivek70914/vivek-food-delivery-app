"use client"

import { useCart } from "../../context/CartContext"

export default function RestaurantPage(){

  const { cart, addToCart, increaseQty, decreaseQty } = useCart()

  const restaurant = {
    name:"Pizza Palace",
    cuisine:"Italian, Pizza",
    rating:"4.5"
  }

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

  const total = cart.reduce(
    (sum:number,item:any)=>sum + item.price * item.quantity,
    0
  )

  function getCartItem(name:string){
    return cart.find((c:any)=>c.name === name)
  }

  return(

    <div className="p-10">

      {/* RESTAURANT HEADER */}

      <h1 className="text-3xl font-bold">
        {restaurant.name}
      </h1>

      <p className="text-gray-500 mt-1">
        {restaurant.cuisine}
      </p>

      <p className="text-green-600 mt-1">
        ⭐ {restaurant.rating}
      </p>

      {/* FOOD IMAGE GALLERY */}

      <div className="flex gap-4 overflow-x-auto mt-6 mb-8">

        <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        className="w-[300px] rounded"/>

        <img
        src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
        className="w-[300px] rounded"/>

        <img
        src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
        className="w-[300px] rounded"/>

      </div>

      {/* MENU */}

      <h2 className="text-2xl font-semibold mb-6">
        Menu
      </h2>

      {foodItems.map((item,index)=>{

        const cartItem = getCartItem(item.name)

        return(

          <div
          key={index}
          className="flex justify-between items-center border-b py-4">

            <div>

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-500">
                ₹ {item.price}
              </p>

              {!cartItem ? (

                <button
                onClick={()=>addToCart(item)}
                className="mt-2 px-4 py-1 bg-orange-500 text-white rounded">
                  Add
                </button>

              ) : (

                <div className="flex gap-3 mt-2">

                  <button
                  onClick={()=>decreaseQty(cart.indexOf(cartItem))}
                  className="px-3 bg-orange-400 text-white rounded">
                    -
                  </button>

                  <span>
                    {cartItem.quantity}
                  </span>

                  <button
                  onClick={()=>increaseQty(cart.indexOf(cartItem))}
                  className="px-3 bg-orange-400 text-white rounded">
                    +
                  </button>

                </div>

              )}

            </div>

            <img
            src={item.image}
            className="w-[120px] h-[90px] object-cover rounded"/>

          </div>

        )

      })}

      {/* CART SUMMARY */}

      <div className="mt-10">

        <h3 className="text-xl">
          Cart Items: {cart.length}
        </h3>

        <h3 className="text-xl mt-2">
          Total: ₹ {total}
        </h3>

      </div>

    </div>

  )

}