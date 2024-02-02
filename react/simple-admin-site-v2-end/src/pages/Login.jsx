import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export function Login() {

    const {handleLogin} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({email:"",password:""});

    function handleChange(e){
        setCredentials({...credentials, [e.target.name]:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(credentials);
        



    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Giriş Formu</h2>
            <label>Epostanız:</label>
            <input type="email" placeholder="e-postanız" name="email" onChange={handleChange} value={credentials.email} />
            <label>Şifreniz:</label>
            <input type="password" placeholder="şifreniz" name="password" onChange={handleChange} value={credentials.password} />

            <button type="submit">Giriş yap</button>

            <p>{credentials.email} {credentials.password} </p>
        </form>
    )
}