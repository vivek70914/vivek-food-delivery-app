"use client"

import { createContext,useContext,useState } from "react"

const AuthContext = createContext<any>(null)

export function AuthProvider({children}:{children:any}){

  const [user,setUser] = useState(null)

  function login(name:string){
    setUser({name})
  }

  function logout(){
    setUser(null)
  }

  return(

    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>

  )

}

export function useAuth(){
  return useContext(AuthContext)
}