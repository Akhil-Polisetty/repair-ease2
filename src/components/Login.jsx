import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import axios from "axios";
const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function handleSubmit(e)
    {   e.preventDefault();
        console.log(email)
        console.log(password)
        try
        {
            const res=await axios.post('https://repair-ease2.vercel.app/signin',{
                email:email,
                password:password
            });
            if(res.data && res.data.token)
            {
                if(res.status === 200){
                    Cookies.set('token',res.data.token);
                    console.log("Login Successful");
                    // Cookies.set('email',email)
                    navigate('/dashboard')
                }
                // console.log(res.data.message)
            }
            else
            {
                console.log("Error : ",res);
            }
        }
        catch(error)
        {
            console.log("error occured at login 37 ",error)
        }
    }
  return (
    <div className='full-log-cont'>
        <div className="login-cont">
            <input type="text" placeholder='Email ID' onChange={(event)=>setEmail(event.target.value)}/>
            <input type="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value) }/>
            <button onClick={handleSubmit}>Login</button>
            <div className="footer">
                <p>Forgot Password</p>
                <p>Don't Have an Account ? <Link to='/signup'>Sign Up here</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login