import React, { useCallback, useEffect, useState } from 'react';
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import ugur from "../assets/ugur.jpg"
import logo from '../assets/bilgeadam-logo.png';
import bgroundd from "../assets/bgt.jpg"
import UserService from "../services/UserService";
import "./Employee.css";


export function Employee(){
  const navigate = useNavigate();

  const[userData, setUserData] = useState();


  useEffect(()=>{
    const init = async () => {
      let token = localStorage.getItem('jwtToken');
      let result = await UserService.getInstance().fetchProfile(token);
      if (result) {
        setUserData(result);
      }
    };

    init();
  }, []);
  
  function handleGoToEmpoyeeProfile() {
    navigate('/employeeProfile');
  }

  const onAdvanceNavClick = useCallback(() => {
    navigate('/advance');
  }, []);

  const onExpenseNavClick = useCallback(() => {
    navigate('/expense');
  }, []);
  const onPermissionNavClick = useCallback(() => {
    navigate('/permission');
  }, []);
  const onLogoutNavClick = useCallback(() => {
    localStorage.clear();
    navigate('/login');
  }, []);

  return (
    <>
    <div className="bground-login" style={{backgroundImage: `url(${bgroundd})`}}>
    
          <div className="profile-page-container">
          <div className="logo-container">
                  <img src={logo} alt="logo" />
              </div>
    <div className="profile-page">
      <div className="profile-picture">
      <Avatar
            alt="User Profile"
            src={ugur} 
            style={{ width: 120, height: 120, marginBottom: "-5px" }}
          />
      </div>
      <div className="user-details">
        <p className="name">{`${userData?.name} ${userData?.secondName} ${userData?.surname}`}</p>
        <p className="email">{userData?.email}</p>
        <p className="email">{userData?.phone}</p>
        <p className="email">{userData?.occupation}</p>
        <p className="email">{userData?.department}</p>
        
      </div>
      <button className="btn-details"  onClick={handleGoToEmpoyeeProfile}>Profil Detayı</button>
      <button className="btn-advance"  onClick={onAdvanceNavClick}>Avans Talebi</button>
      <button className="btn-expense"  onClick={onExpenseNavClick}>Harcamalar</button>
      <button className="btn-permission"  onClick={onPermissionNavClick}>izinler</button>
      <button className="btn-logout"  onClick={onLogoutNavClick}>ÇIKIŞ</button>
    </div>
    </div>
  </div>
    </>
  
    
  );
}





/*
import "./Employee.css";
import {decodeJwt} from "jose";
import axios from 'axios';

import React, { useEffect, useState } from 'react';

export function Employee(){




  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    photo:"",
  });

  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  

  
   useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token);
        
          const response = await axios.get(`http://localhost:9092/api/v1/employee/find-by-id/`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              'Cache-Control': 'no-cache',
            
            },
            params: {
              token:token,
              timestamp: new Date().getTime(),
            },
            mode:'cors',
          });

          const { name, surname, email, photo } = response.data;
          setUserData({
            name,
            surname,
            email,
            photo,

          });
        
      } catch (error) {
        console.error('Veri getirme hatası', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, [token]);
  

  return (
    <>
    <div className="profile-page-container">
    <div className="profile-page">
      <div className="profile-picture">
        <img className="photo" src={userData.photo} alt="photo" />
      </div>
      <div className="user-details">
        <p className="name">{userData.name} {userData.surname}</p>
        <p className="email">{userData.email}</p>
      </div>
    </div>
    </div>
         
    </>
  );
}

*/
 
