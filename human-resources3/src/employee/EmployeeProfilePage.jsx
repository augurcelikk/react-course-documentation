import React, { useEffect, useState,useCallback } from 'react';
import { decodeJwt } from "jose";
import axios from 'axios';
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import defaultPhoto from "../assets/default-image.jpg";
import ugur from "../assets/ugur.jpg"
import bgroundd from "../assets/bgt.jpg"
import logo from '../assets/bilgeadam-logo.png';
import { useDropzone } from 'react-dropzone';
import UserService from "../services/UserService";
import "./EmployeeProfilePage.css";

export function EmployeeProfilePage() {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [tempUserData, setTempUserData] = useState({
    address: "",
    phone: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    secondName: "",
    surname: "",
    secondSurname: "",
    email: "",
    personalEmail: "",
    identityNumber: "",
    birthPlace: "",
    occupation: "",
    department: "",
    company: "",
    address: "",
    phone: "",
    salary: "",
    birthDate: "",
    jobStart: "",
    jobEnd: "",
    avatar: "",
  });

  useEffect(()=>{
    const init = async () => {
      let token = localStorage.getItem('jwtToken');
      let result = await UserService.getInstance().fetchProfileDetails(token);
      if (result) {
        setUserData(result);
      }
    };

    init();
  }, []);


  const handleEdit = () => {
    setTempUserData({
      address: userData.address,
      phone: userData.phone,
    });
    setEditMode(true);
  };
/*
  const handleSave = async (e) => {
    e.preventDefault();
    setEditMode(false);
    
    //if (profileImage) {
    //  uploadProfileImage(profileImage);
   // }
    
    try {
      const header = {
        'Content-Type': 'application/json',
      };
  
      
      const data = JSON.stringify({
        token: token,
        phone: userData.phone,  
        address: userData.address,  
      });
  
      const response = await axios({
        method: 'POST', 
        url: 'http://localhost:9092/api/v1/employee/update-employee',
        headers: header,
        data: data,
      });
  
      console.log(response);
  
      if (response.ok) {
        const responseData = await response.text();
        localStorage.setItem("token", responseData);
        alert("Kayıt başarılı");
      } else {
        alert("Bir hata oluştu. İşlem başarısız.");
        console.error('İşlem başarısız.');
      }
    } catch (error) {
      alert("İstek gönderilirken bir hata oluştu.");
      console.error('İstek gönderme hatası:', error);
    }
  };
  console.log(token,userData.phone, userData.address, )
*/
  const handleCancel = () => {
    setUserData({
      ...userData,
      address: tempUserData.address,
      phone: tempUserData.phone,
    });
    setEditMode(false);
  };

  const handleChangeAddress = (e) => {
    const { value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      address: value,
    }));
  };

  const handleChangePhone = (e) => {
    const { value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      phone: value,
    }));
  };

  const onProfileButtonClick = useCallback(() => {
    navigate('/employee');
  }, []);

  /*
  const uploadProfileImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:9092/api/v1/employee/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        console.log("Profil fotoğrafı yüklendi");
        setUserData({
          ...userData,
          photo: response.data.imageUrl, // 'photo' alanını güncelle
        });
      })
      .catch((error) => {
        console.error("Profil fotoğrafı yüklenirken hata oluştu:", error);
      });
  };
  

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setProfileImage(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  */

  return (
    <div className="bground-login" style={{backgroundImage: `url(${bgroundd})`}}>
      <div className="profile-page-container-employee-profile" >
      <div className="logo-container">
                  <img src={logo} alt="logo" />
              </div>
        <div className="profile-page-employee-profile">
          <div className="profile-picture-employee-profile" >
            <Avatar
              alt="User Profile"
              src={userData.photo || ugur}
              style={{ width: 120, height: 120, marginBottom: "-5px" }}
            />
          
          </div>
          <div className="user-details-employee-profile">
            {editMode ? (
             <div className="edit-form-employee-profile" >
                 {/*  <input {...getInputProps()} />
            <p>Profil fotoğrafınızı buraya sürükleyin veya tıklayın</p> */}
                <label>
                  Adres :<input type="text" name="address" value={userData.address} onChange={handleChangeAddress} />
                </label>
                <label>
                  Telefon :<input type="text" name="phone" value={userData.phone} onChange={handleChangePhone} />
                </label>
                <div className="editing-buttons">
                  <button className="save-button-employee-profile" onClick={handleSave}>Save</button>
                  <button className="cancel-button-employee-profile" onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            ) :  (
              <div className="additional-details-employee-profile">
                <div className="additional-details-employee-profile-data">
                <p className="name-employee-profile">{`${userData.name} ${userData.secondName} ${userData.surname}`}</p>
                <p className="email-employee-profile">{userData.email}</p>
                <p>Doğum Günü: {userData?.birthDate}</p>
                <p>Doğum Yeri: {userData?.birthPlace}</p>
                <p>TC No: {userData?.identityNumber}  </p>
                <p>İş Başlangıç Tarihi: {userData?.jobStart} </p>
                <p>İş Çıkış Tarihi: {userData?.jobEnd}</p>
                <p>Meslek: {userData?.occupation} </p>
                <p>Departman: {userData?.department} </p>
                <p>Şirket: {userData?.company}</p>
                <p>Çalışma Durumu: {userData?.activation} </p>
                <p>Adres: {userData?.address} </p>
                <p>Telefon: {userData?.phone}</p>
                <p>Maaş: {userData?.salary} </p>
  
                </div>
               
               
                <div className="buttons">
                <button className="edit-buttons" onClick={handleEdit}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-details" onClick={onProfileButtonClick}>Ana Menü</button>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

