import React, { useState } from 'react';
import './login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import Cookies library

const Logins = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/signin', {
                name: username,
                password: password
            });
            if (res.status === 200 && res.data.token) {
                // Store token in cookies
                Cookies.set('token', res.data.token);
                navigate('/dashboard');
            } else {
                console.log("Error: ", res.data.message);
            }
        } catch (error) {
            console.log("Error occurred: ", error);
        }
    }

    return (
        <div className="login-cont">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Login</button>
            </form>
            <div className="footer">
                <p>Forgot Password</p>
                <p>Don't Have an Account ? <a href='/signup'>Sign Up here</a></p>
            </div>
        </div>
    );
}

export default Logins;
