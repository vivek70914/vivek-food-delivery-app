"use client"

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {

  return (

    <div style={{marginBottom:"30px"}}>

      <input
        type="text"
        placeholder="Search restaurants..."
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        style={{
          width:"100%",
          padding:"12px",
          fontSize:"16px",
          borderRadius:"8px",
          border:"1px solid #ccc"
        }}
      />

    </div>

  )

}