import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const SignUp = () => {

    const navigate = useNavigate();
    const [username,setUsername]=useState('')
    const [emailId,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confpassword,setConfPassword]=useState('')
    async function handleSubmit(e)
    {
         e.preventDefault();
        if(password !== confpassword)
        {
            console.log("password does not match")
        }
        else
        {
            try
            {
                const res=await axios.post('http://localhost:7000/register',{
                    name:username,
                    email:emailId,
                    password:password,
                });
                if(res.data && res.data.message)
                {   
                    console.log(res.data.message,res.status);
                     if(res.status === 200){
                        navigate('/signin');
                     }
                    
                }
                else
                {
                    console.log("Error : ",res);
                }
            }
            catch(error)
            {
                console.log("error occured at signup 44",error)
            }
        }

    };
  return (
    <div className='full-reg-cont'>
        
        <form onSubmit={handleSubmit} className="signup-cont">
            <input type="text" placeholder='Enter Username' onChange={(event)=>setUsername(event.target.value)}/>
            <input type="email" placeholder='Email id' onChange={(event)=>setEmail(event.target.value)}/>
            <input type="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)}/>
            <input type="password" placeholder='confirm password' onChange={(event)=>setConfPassword(event.target.value)}/>

            <button type="submit" >Sign Up</button>
            <div className="footer">
                <p>Already Have an Account ? <a href='/signin'>Login here</a></p>
            </div>
            </form>
           
        
    </div>
  )
}

export default SignUp