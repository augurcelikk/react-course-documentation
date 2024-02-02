import { createContext, useContext, useState, useEffect } from "react";
import { login } from "../api/api";
import {decodeJwt} from "jose";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);




export function AuthContextProvider({children}){


const [auth,setAuth] = useState({token:null,payload:null});

const navigate = useNavigate();



function handleLogin(credentials){
  login(credentials)
  .then((token)=>{
    console.log(token)
    //token geldi. tokendan payload'ı al.

    //console.log(decodeJwt(token));
    const payload = decodeJwt(token)
    setAuth({...auth,token,payload})
    navigate("/");
  })
  .catch((err)=>{
    console.log(err)
  });
}

function handleLogout(credentials){
  setAuth({token:null,payload:null});

}


  return(
    <AuthContext.Provider value={{handleLogin,handleLogout, ...auth}} > 
      {children}
    </AuthContext.Provider>
  )
}