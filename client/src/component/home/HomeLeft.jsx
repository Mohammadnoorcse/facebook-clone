import React from 'react'
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import { groupData, leftData } from "../demodata/LeftData";
const HomeLeft = () => {
  return (
    <>
      {/* profile */}
      <Link className="left-profile" to="/profile">
        <img src={profile} alt="profile" />
        <span>Mohammad Noor</span>
      </Link>
      {leftData.map((value, index) => (
        <Link className="left-item" to="/item-1" key={index}>
          <i className={value.icon} style={{ color: `${value.color}` }}></i>
          <span>{value.name}</span>
        </Link>
      ))}
      <div className="home-left-hr"></div>

      <div className="home-left-2">
        <span>Your shortcuts</span>
        <span className="home-edit">Edit</span>
      </div>

      {groupData.map((value) => (
        <Link
          className="home-left-3"
          to={`/group/${value._id}`}
          key={value._id}
        >
          <img src={value.img} alt="" />
          <span>{value.name}</span>
        </Link>
      ))}
    </>
  );
}

export default HomeLeft