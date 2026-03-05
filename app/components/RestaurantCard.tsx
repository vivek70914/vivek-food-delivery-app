import Link from "next/link"

type Props = {
  id: number
  name: string
  image: string
  rating: string
  cuisine: string
}

export default function RestaurantCard({
  id,
  name,
  image,
  rating,
  cuisine
}: Props) {

  return (

    <Link href={`/restaurant/${id}`} style={{textDecoration:"none",color:"black"}}>

      <div
        style={{
          border:"1px solid #eee",
          borderRadius:"12px",
          overflow:"hidden",
          background:"#fff",
          cursor:"pointer",
          transition:"0.2s",
          boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
        }}
      >

        <img
          src={image}
          style={{
            width:"100%",
            height:"180px",
            objectFit:"cover"
          }}
        />

        <div style={{padding:"12px"}}>

          <h3 style={{marginBottom:"6px"}}>
            {name}
          </h3>

          <p style={{color:"#666",fontSize:"14px"}}>
            {cuisine}
          </p>

          <div
            style={{
              marginTop:"8px",
              display:"inline-block",
              background:"green",
              color:"white",
              padding:"3px 8px",
              borderRadius:"5px",
              fontSize:"12px"
            }}
          >
            ⭐ {rating}
          </div>

        </div>

      </div>

    </Link>

  )
}