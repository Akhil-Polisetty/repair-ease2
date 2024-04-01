import React from "react";
import "./raiseissue.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const RaiseIssue = () => {
  function handleSub(event) {
    event.preventDefault();
    console.log("Form submitted succesfully");
  }
  return (
    <>
      <NavBar />
      <div className="full_cont">
        <div className="form_head">
          <form action="" onSubmit={handleSub} className="form_cont">
            <label htmlFor="name">
              Name : &nbsp;
              <input type="text" id="name" />
            </label>

            <label htmlFor="appliance">
              Appliance : &nbsp;
              <select id="appliance">
                <option value="fan">Fan</option>
                <option value="fridge">Fridge</option>
                <option value="washing machine">Washing Machine</option>
                <option value="TV">TV</option>
              </select>
            </label>
            <label htmlFor="model">
              Enter Model Details : &nbsp;
              <input type="text" id="model" />
            </label>

            <label htmlFor="description">
              Description about Issue : &nbsp;
              <textarea
                name=""
                id="description"
                cols="30"
                rows="1.5"
              ></textarea>
            </label>
            <label htmlFor="location">
              Location of Repair : &nbsp;
              <input type="text" id="location" />
            </label>

            <label htmlFor="address">
              Address : &nbsp;
              <input type="text" id="adress" />
            </label>

            <label htmlFor="locate">
            Location : &nbsp;
            <input type="text" placeholder="add location here" id="locate"/>
            </label>
            <input type="submit" value="Raise an Repair" />
          </form>
        </div>
      </div>
    </>
  );
};

export default RaiseIssue;
