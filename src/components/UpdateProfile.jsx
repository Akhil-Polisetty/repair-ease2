// import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import React, { useEffect, } from 'react'
import axios from 'axios'
import "./profile.css";


const UpdateProfile = () => {

    const [users,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://repair-ease2.vercel.app:7000/getUsering')
        .then(users => setUser(users.data))
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate();
    const [username,setUsername]=useState('')
    const [phone,setPhone]=useState('')
    const [city,setCity]=useState('')
    // const [confpassword,setConfPassword]=useState('')
    async function updateProfile(e)
    {
      e.preventDefault(e);
      try
      {
          const res=await axios.post('http://localhost:7000/update_prof',{
              name:username,
              email:users.email_id,
              phone:phone,
              city:city
          });
          if(res.status==200)
          {
            navigate("/profile")
          }
          else{
            console.log("error occured at updateprofile 37")
          }
        }
          catch(error)
          {
              console.log("error occured at signup 44",error)
          }
    }
  return (
    <>
      <NavBar/>
    <div className='profile_head'>
    <div className="profile_cont">
           <input type="text" placeholder='Enter Username' onChange={(event)=>setUsername(event.target.value)}/>
            {/* <input type="email" placeholder='Email id' onChange={(event)=>setEmail(event.target.value)}/> */}
            <input type="text" placeholder='Phone no' onChange={(event)=>setPhone(event.target.value)}/>
            <input type="email" placeholder='city' onChange={(event)=>setCity(event.target.value)}/>
            {/* <input type="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)}/> */}
            <div onClick={updateProfile} className='update_prof_btn'>Update Profile</div>
            </div>

    </div>
    </>
  )
}

export default UpdateProfile