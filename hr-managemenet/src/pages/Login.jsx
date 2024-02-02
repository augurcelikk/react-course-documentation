import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";

export function Login() {

    const {handleLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email:"",password:""});

    function handleChange(e){
        setCredentials({...credentials, [e.target.name]:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(credentials);
        

    }

   const handleSubmit2 = async(e)=> {
        e.preventDefault();
    
        const payload = {
            email: credentials.email,
            password: credentials.password,
        } 
        try {
          const response = await axios.post('http://localhost:9090/api/v1/auth/login' , payload);
          localStorage.setItem('token',response?.data)
          navigate("/")
        } catch (error) {
            console.log(error);
        }



    }



    return (
        <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <label>E-mail</label>
            <input type="email" placeholder="example@email.com" name="email" onChange={handleChange} value={credentials.email} />
            <label>Password</label>
            <input type="password" placeholder="At least 6 characters" name="password" onChange={handleChange} value={credentials.password} />

            <button type="submit">Login</button>

            <p>{credentials.email} {credentials.password} </p>
        </form>
    )
}