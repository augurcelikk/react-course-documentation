import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/bilgeadam-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import bground from "../assets/bgtest.jpg"
import bgroundd from "../assets/bgt.jpg"
import AuthService from "../services/AuthService";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        const response = await AuthService.getInstance().login(email, password);
  
        if (response) {
          localStorage.setItem("token", JSON.stringify(response));
          localStorage.setItem('jwtToken', response.token);
          navigate('/employee');
        } else {
          alert("Email veya şifre hatalı. Yeniden deneyin.");
          console.error('Login failed');
        }
      } catch (error) {
        alert("Error");
        console.error('Error during login:', error);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
   
    return (
      <div className="bground-login" style={{backgroundImage: `url(${bgroundd})`}} >
        <div  className="login-page">
          <div className="logo-container">
                  <img src={logo} alt="logo" />
              </div>
        
          <div className="form">
            
            <form className="login-form">
              <p>Email</p>
              <input type="text" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
/>
              <button onClick={handleLogin}>login</button>
              <div className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
             
            </form>
          
        </div>
      </div>
      </div>
      
    );
  }

