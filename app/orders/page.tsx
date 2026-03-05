"use client"

export default function Orders(){

  const orders = [
    {id:1,restaurant:"Pizza Palace",total:450,status:"Delivered"},
    {id:2,restaurant:"Burger Hub",total:240,status:"Delivered"}
  ]

  return(

    <div className="p-10">

      <h1 className="text-3xl mb-6">
        Your Orders
      </h1>

      {orders.map((o)=>(
        <div
        key={o.id}
        className="border p-4 mb-4 rounded">

          <h2>{o.restaurant}</h2>

          <p>Total: ₹ {o.total}</p>

          <p>Status: {o.status}</p>

        </div>
      ))}

    </div>

  )

}