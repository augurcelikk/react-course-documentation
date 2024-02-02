import React, { useCallback, useEffect, useState } from 'react';
import "./CreateAdvancePage.css";
import { useNavigate } from "react-router-dom";
import bgroundd from "../../assets/bgt.jpg"
import logo from '../../assets/bilgeadam-logo.png';
import UserService from '../../services/UserService';


export function CreateAdvancePage() {
  const navigate = useNavigate();

  const [advanceAmount, setAdvanceAmount] = useState();
  const [unitOfCurrency, setUnitOfCurrency] = useState();
  const [description, setDescription] = useState();
  const [advanceType, setAdvanceType] = useState();
  const [requestDate, setRequestDate] = useState();

  const onSubmitClick = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await UserService.getInstance().createAdvance({
        token: localStorage.getItem('jwtToken'),
        responseUserId: '',
        advanceAmount,
        unitOfCurrency,
        description,
        advanceType,
        requestDate,
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
  }, [advanceAmount, unitOfCurrency, description, advanceType, requestDate]);

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
            <p>Avans Miktarı</p>
            <input type="text" placeholder="x000" value={advanceAmount} onChange={(e) => setAdvanceAmount(e.target.value)} />

            <p>Para Birimi</p>
            <input type="text" placeholder="TRY, USD" value={unitOfCurrency} onChange={(e) => setUnitOfCurrency(e.target.value)} />

            <p>Açıklama</p>
            <input type="text" placeholder="Why do you need it?" value={description} onChange={(e) => setDescription(e.target.value)} />

            <p>Avans Türü</p>
            <input type="text" placeholder="Type" value={advanceType} onChange={(e) => setAdvanceType(e.target.value)} />

            <p>İstek Tarihi</p>
            <input type="text" placeholder="2024-01-01" value={requestDate} onChange={(e) => setRequestDate(e.target.value)} />

            <button className='btn-send' onClick={onSubmitClick}>Gönder</button>
          </form>
        </div>
        <button className="btn-details" onClick={onProfileButtonClick}>Ana Menü</button>
      </div>
      </div>
    </div>
  );
}