import { Outlet,Navigate } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function ProtectedRoute({children}){

  const {token} = useContext(AuthContext);

  if(!token){


    return <Navigate to="/login"/>
  }

  return (

    <div className="testing">
    <Outlet>
      {children}
    </Outlet>
    </div>

  )

}