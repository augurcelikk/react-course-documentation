import React, { useCallback, useEffect, useState } from 'react';
import "./CreatePermissionPage.css";
import { useNavigate } from "react-router-dom";
import bgroundd from "../../assets/bgt.jpg"
import logo from '../../assets/bilgeadam-logo.png';
import UserService from '../../services/UserService';



export function CreatePermissionPage() {
  const navigate = useNavigate();

  const [permissionType, setPermissionType] = useState();
  const [dateOfRequest, setDateOfRequest] = useState();
  const [startOfPermission, setStartOfPermission] = useState();
  const [endOfPermission, setEndOfPermission] = useState();
  const [permissionDuration, setPermissionDuration] = useState();

  const onSubmitClick = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await UserService.getInstance().createPermisson({
        token: localStorage.getItem('jwtToken'),
        responseUserId: '',
        permissionType,
        dateOfRequest,
        startOfPermission,
        endOfPermission,
        permissionDuration,
      });

      if (response) {
        alert(response.message);
      } else {
        alert("Hata");
      }
    } catch (error) {
      alert(error.response.data.message);
      console.error('Error during create advance:', error);
    }
  }, [permissionType, dateOfRequest, startOfPermission, endOfPermission, permissionDuration]);

  const onProfileButtonClick = useCallback(() => {
    navigate('/employee');
  }, []);

  return (
    <div className="bground-login" style={{backgroundImage: `url(${bgroundd})`}}>
            <div className="profile-page-container">
            <div className="logo-container">
                  <img src={logo} alt="logo" />
              </div>
      <div className="profile-page">
        
        <div className="user-details">
          <form className="login-form">
            <p>İzin Türü</p>
            <input type="text" placeholder="Açıklama..." value={permissionType} onChange={(e) => setPermissionType(e.target.value)} />

            <p>İzin Oluşturma Tarihi</p>
            <input type="text" placeholder="2024-01-01" value={dateOfRequest} onChange={(e) => setDateOfRequest(e.target.value)} />

            <p>İzin Başlangıç Tarihi</p>
            <input type="text" placeholder="2024-01-01" value={startOfPermission} onChange={(e) => setStartOfPermission(e.target.value)} />

            <p>İzin Bitiş Tarihi</p>
            <input type="text" placeholder="2024-01-01" value={endOfPermission} onChange={(e) => setEndOfPermission(e.target.value)} />

            <p>İzin Süresi (Gün)</p>
            <input type="text" placeholder="0" value={permissionDuration} onChange={(e) => setPermissionDuration(e.target.value)} />

            <button className='btn-send' onClick={onSubmitClick}>Gönder</button>
          </form>
        </div>
        <button className="btn-details" onClick={onProfileButtonClick}>Ana Menü</button>
      </div>
      </div>
    </div>
  );
}