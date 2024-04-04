import React, { useState } from "react";
import "./raiseissue.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

const RaiseIssue = () => {
  async function handleSub(event) {
    event.preventDefault();
    try{
      const res=await axios.post('http://localhost:7000/raising',{
        rname:rname,
        rappliance:rappliance,
        rmodel:rmodel,
        rdesc:rdesc,
        rlocation:rlocation,
        raddress:raddress
        
      });
      if(res.data)
      {
        if(res.status===200)
        {
          console.log("inserted into database succesfully")
        }
      }
      else
      {
        console.log("error at raise 29",res)
      }
    }
    catch(err)
    {
      console.log("error at raise 34 ",err)
    }
    // console.log("Form submitted succesfully");
    // console.log("username is ",rname)
    // console.log("description is ",rdesc)
    // console.log("location is ",rlocation)
    // console.log("appliance is ",rappliance)
    // console.log("model is ",rmodel)
    // console.log("adress is ",raddress)
  }
  const [rname,setRname]=useState('')
  const [rdesc,setRdesc]=useState('')
  const [rlocation,setRlocation]=useState('')
  const [rappliance,setRappliance]=useState('')
  const [rmodel,setRmodel]=useState('')
  const [raddress,setRaddress]=useState('')

  
  return (
    <>
      <NavBar />
      <div className="full_cont">
        <div className="form_head">
          <form action="" onSubmit={handleSub} className="form_cont">
            <label htmlFor="name">
              Name : &nbsp;
              <input type="text" id="name" onChange={(event)=>setRname(event.target.value)}/>
            </label>

            <label htmlFor="appliance">
              Appliance : &nbsp;
              <select id="appliance" onChange={(event)=>setRappliance(event.target.value)}>
                <option value="fan">Fan</option>
                <option value="fridge">Fridge</option>
                <option value="washing machine">Washing Machine</option>
                <option value="TV">TV</option>
              </select>
            </label>
            <label htmlFor="model">
              Enter Model Details : &nbsp;
              <input type="text" id="model" onChange={(event)=>setRmodel(event.target.value)}/>
            </label>

            <label htmlFor="description">
              Description about Issue : &nbsp;
              <textarea
                name=""
                id="description"
                cols="30"
                rows="1.5"
                onChange={(event)=>setRdesc(event.target.value)}
              ></textarea>
            </label>
            <label htmlFor="location">
              Location of Repair : &nbsp;
              <input type="text" id="location" onChange={(event)=>setRlocation(event.target.value)}/>
            </label>

            <label htmlFor="address">
              Address : &nbsp;
              <input type="text" id="adress" onChange={(event)=>setRaddress(event.target.value)} />
            </label>

            <label htmlFor="locate">
            Location : &nbsp;
            <input type="text" placeholder="add location here" id="locate"/>
            </label>
            <input type="submit" value="Raise an Repair" className="raise_btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default RaiseIssue;
