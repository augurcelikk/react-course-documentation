import React, { useCallback, useEffect, useState } from 'react';
import "./CreateExpensePage.css";
import { useNavigate } from "react-router-dom";
import bgroundd from "../../assets/bgt.jpg"
import logo from '../../assets/bilgeadam-logo.png';
import UserService from '../../services/UserService';



export function CreateExpensePage() {
  const navigate = useNavigate();

  const [expenseAmount, setExpenseAmount] = useState();
  const [unitOfCurrency, setUnitOfCurrency] = useState();
  const [description, setDescription] = useState();
  const [expenseType, setExpenseType] = useState();
  const [requestDate, setRequestDate] = useState();

  const onSubmitClick = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await UserService.getInstance().createExpense({
        token: localStorage.getItem('jwtToken'),
        responseUserId: '',
        expenseAmount,
        unitOfCurrency,
        description,
        expenseType,
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
  }, [expenseAmount, unitOfCurrency, description, expenseType, requestDate]);

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
            <p>Gider Miktarı</p>
            <input type="text" placeholder="x000" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />

            <p>Para Birimi</p>
            <input type="text" placeholder="TRY, USD" value={unitOfCurrency} onChange={(e) => setUnitOfCurrency(e.target.value)} />

            <p>Açıklama</p>
            <input type="text" placeholder="Why do you need it?" value={description} onChange={(e) => setDescription(e.target.value)} />

            <p>Gider Türü</p>
            <input type="text" placeholder="Type" value={expenseType} onChange={(e) => setExpenseType(e.target.value)} />

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