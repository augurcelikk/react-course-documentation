import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from 'axios';

import "./Employee.css";

export function Employee(){

  const token = localStorage.getItem("token");
  console.log(token);




  const[userData, setUserData] = useState({
    name:"",
    surname:"",
    email:"",
  })


  useEffect(()=>{

    if (!token) {
      console.error('Token is missing.');
      return;
    }
    axios.post('http://localhost:9092/api/v1/user/getProfile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Cache-Control': 'no-cache',
      },


    })
    .then(response => {
      const{name, surname, email} =response.data;
      console.log("API yanıtı: ",response.data);
      setUserData({name,surname,email});
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  },[]);

  console.log(userData.name);
  console.log(userData.avatar);

  return (
    <>
    <div className="profile-page-container">
    <div className="profile-page">
      <div className="user-details">
        <p className="name">{userData.name} {userData.surname}</p>
        <p className="email">{userData.email}</p>
      </div>
    </div>
    </div>
         
    </>
  );

}
