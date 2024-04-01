import React from "react";
// import './predictprice.css'
import "./raiseissue.css";
import NavBar from "./NavBar";
const PredictPrize = () => {
  function handleSub(event) {
    event.preventDefault();
    console.log("predicted succesfully");
  }
  return (
    <>
      <NavBar />
      <div className="full_cont">
        <div className="form_head">
          <form action="" className="form_cont" onSubmit={handleSub}>
            <label htmlFor="app_type">
              Appliance Type : &nbsp;
              <select name="" id="app_type">
                <option value="fan">fan</option>
                <option value="fridge">fridge</option>
                <option value="tv">TV</option>
                <option value="sofa">Sofa</option>
              </select>
            </label>

            <label htmlFor="model">
              Enter Model Details
              <input type="text" />
            </label>
            <label htmlFor="yop">
              Year of Purchase
              <input type="date" name="" id="yop" />
            </label>
            <label htmlFor="desc">
              Description about repair :
              <textarea name="" id="desc" cols="30" rows="1"></textarea>
            </label>
            <input type="submit" value="PREDICT" className="sub_btn" />
            <input type="reset" value="RESET" className="sub_btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default PredictPrize;
