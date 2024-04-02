import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios";
import Cookies from "js-cookie";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:7000/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/home");
      }
    });
  }, []);
  function handleLogout() {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:7000/auth/logout")
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
      <div onClick={handleLogout} className="logout dum2">
        logout
      </div>
      welcome to my page
    </div>
  );
};

export default Dashboard;
