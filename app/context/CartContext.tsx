"use client"

import { createContext, useContext, useState } from "react"

type CartItem = {
  name: string
  price: number
  quantity: number
}

const CartContext = createContext<any>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item:any){

    const existingItem = cart.find((c)=>c.name === item.name)

    if(existingItem){

      const updatedCart = cart.map((c)=>
        c.name === item.name
        ? {...c, quantity: c.quantity + 1}
        : c
      )

      setCart(updatedCart)

    } else {

      setCart([...cart,{...item,quantity:1}])

    }

  }

  function increaseQty(index:number){

    const updatedCart = [...cart]
    updatedCart[index].quantity += 1
    setCart(updatedCart)

  }

  function decreaseQty(index:number){

    const updatedCart = [...cart]

    if(updatedCart[index].quantity > 1){
      updatedCart[index].quantity -= 1
    } else {
      updatedCart.splice(index,1)
    }

    setCart(updatedCart)

  }

  return (
    <CartContext.Provider value={{cart,addToCart,increaseQty,decreaseQty}}>
      {children}
    </CartContext.Provider>
  )

}

export function useCart(){
  return useContext(CartContext)
}