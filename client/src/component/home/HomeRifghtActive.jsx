import React from 'react'
import { Link } from 'react-router-dom';
import sujon from "../../assets/sujon.jpg"

const HomeRifghtActive = ({ value }) => {
    //  if (!value) {
    //    console.error("Value prop is undefined.");
    //    return null;
    //  }
   
  return (
    <Link to="/people" className="homeright-5">
      <div className="homeright-5-1">
        {/* <img src={sujon} alt="" /> */}
        <img src={value.profile} alt="" />
      </div>
      <div className="homeright-5-2">
        <span>{value.name}</span>
      </div>
      <div className="homeright-5-3"></div>
    </Link>
  );
};

export default HomeRifghtActive