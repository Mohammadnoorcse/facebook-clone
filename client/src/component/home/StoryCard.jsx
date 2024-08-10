import React from 'react'
import { Link } from "react-router-dom";
import demo from "../../assets/demo-1.png";
import mizan from "../../assets/mizan.jpg";
function StoryCard({value}) {
    const active = value.active;
  return (
    <>
      <Link to="/story/1" className="story">
        <img src={value.profile} alt="" className="story-main" />
        <div className="story-profile">
          <div className="story-profile-1">
            <img src={value.profile} alt="" />
          </div>
        </div>
        <div className={active ? "story-active" : "story-active-hide"}></div>
        <div className="story-text">
          <span>{value.name}</span>
        </div>
      </Link>
    </>
  );
}

export default StoryCard