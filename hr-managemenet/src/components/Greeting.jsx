import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export function Greeting(){
  const{payload,handleLogout} = useContext(AuthContext);

  console.log(payload);

  return(
    <>
        <p>{payload && `Merhaba, ${payload.authId}`}</p>
        {payload && <button onClick={()=>{handleLogout()}}>Logout</button>}
    </>

  )
}