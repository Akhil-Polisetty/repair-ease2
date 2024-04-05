import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios";
import Cookies from "js-cookie";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [users,setUser]=useState([])
  useEffect(() => {
    axios.get("https://repair-ease2.vercel.app:7000/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/home");
      }
    });
  }, []);
  useEffect(()=>{
    axios.get('https://repair-ease2.vercel.app/getUsering')
    .then(users => setUser(users.data))
    .catch(err => console.log(err))
},[])
console.log("the data is ",users)
console.log("the tech is ",users.tech)

  function handleLogout() {
    axios.defaults.withCredentials = true;
    axios
      .get("https://repair-ease2.vercel.app/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/home");
        } else {
          console.error("error ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/home");
  }
  return (
    <div className="dash_cont">
      <NavBar />
      <Link to="/raise" className="dum2">
        <div className="raise_but">Raise a Repair</div>
      </Link>
      <Link to="/predict" className="dum2">
        <div className="predict_but">Predict the Price</div>
      </Link>

      {
        users.tech==="yes" ? 
      <Link to="/repairreq" className="dum2">
        <div className="predict_but">Repair Requests</div>
      </Link>
      :
      <></>
      }

      <div onClick={handleLogout} className="logout dum2">
        logout
      </div>
      welcome to my page
    </div>
  );
};

export default Dashboard;
