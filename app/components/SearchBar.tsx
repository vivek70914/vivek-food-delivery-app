"use client"

export default function SearchBar({search,setSearch}:{search:string,setSearch:any}){

  return(

    <div className="flex justify-center mt-6">

      <input
        placeholder="Search restaurants or food..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="w-[400px] p-3 rounded-lg border text-black"
      />

    </div>

  )

}