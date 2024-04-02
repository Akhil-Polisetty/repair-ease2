// import React from "react";
import "./profile.css";
import NavBar from "./NavBar";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// import './appback.css'

const Profile = () => {

  const navigate=useNavigate()
  const [users,setUser]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:7000/getUsering')
        .then(users => setUser(users.data))
        .catch(err => console.log(err))
    },[])
    console.log("the data is ",users)
    //  async function updateProfile(e)
    // {
    //   e.preventDefault(e);
    //   try
    //   {
    //       const res=await axios.post('http://localhost:7000/update_prof',{
    //           name:"dummy",
    //           email:users.email_id,
    //           phone:"1111111111",
    //           city:"dummycity"
    //       });
    //     }
    //       catch(error)
    //       {
    //           console.log("error occured at signup 44",error)
    //       }
    // }
    function handleup()
    {
      navigate('/update_profile')
    }



  return (
    <>
      <NavBar />
      <div className="profile_head">
        <div className="profile_cont">

          
                    
                       
                            <div>
                              <div><span className="profile_que">UserName :</span> {users.u_name}</div>
                              <div><span className="profile_que">EmailId : </span>{users.email_id}</div>
                              <div><span className="profile_que">phone : </span>{users.phn_no}</div>
                              <div><span className="profile_que">city : </span>{users.city}</div>
                            </div>
                            <div onClick={handleup} className="update_prof_btn">Update Profile</div>
                       
                    
          

        </div>
      </div>
    </>
  );
};

export default Profile;
