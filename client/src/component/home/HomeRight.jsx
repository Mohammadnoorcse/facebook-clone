import React from 'react'
import "./homeright.css"
import {Link} from "react-router-dom";
import roki from "../../assets/roki.jpg";
import HomeRifghtActive from './HomeRifghtActive';
import { demochat, groupData } from '../demodata/DemoChat';
const HomeRight = () => {
    // const activeData =demochat.filter(item => item.active === true);
    // console.log(demochat)
  return (
    <div className="homeright">
      <div className="homeright-1">
        <span>Your Pages and profiles</span>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <Link className="homeright-2" to="/page">
        <img src={roki} alt="" />
        <span>CodeConnect</span>
      </Link>
      <div className="homeright-promation">
        <Link className="homeright-3" to="/">
          <i class="fa-regular fa-user"></i>
          <span>switch to page</span>
        </Link>
        <Link className="homeright-3" to="/">
          <i class="fa-solid fa-bullhorn"></i>
          <span>create promotion</span>
        </Link>
      </div>
      <div className="homeright-hr"></div>
      <div className="homeright-4">
        <div className="homeright-4-1">
          <span>Contacts</span>
        </div>
        <div className="homeright-4-2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      {demochat.map((value) => (
        <HomeRifghtActive key={value._id} value={value} />
      ))}
      <div className="homeright-hr"></div>

      <div className="homeright-6">
        <span>Group conversations</span>
      </div>
      {groupData.map((value) => (
        <HomeRifghtActive key={value._id} value={value} />
      ))}
    </div>
  );
}

export default HomeRight