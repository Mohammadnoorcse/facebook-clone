import React from 'react'
import "./profilepost.css";
import { introdata, introfriendsData, introphotosData } from '../demodata/ProfileData';
import {Link} from "react-router-dom"
import group from "../../assets/moni.jpg"
const ProfilePost = () => {
  return (
    <div className="profilepost">
      <div className="intro">
        <div className="intro-section-1">
          <h1>Intro</h1>
          <div className="intro-bio">
            <span>
              যারা ধৈর্য-নিষ্ঠার সাথে চেষ্টা করে, আল্লাহ অবশ্যই তাদের সাথে আছেন
              -(আল-বাক্বারাহ ১৫৩)
            </span>
            <button>Edit bio</button>
          </div>

          {introdata.map((value) => (
            <div className="intro-item" key={value._id}>
              <div className="intro-item-1">
                <i class={value.icon}></i>
              </div>
              <div className="intro-item-2">
                <span>{value.text}</span>
              </div>
            </div>
          ))}
          <button className="intro-edit-btn">Edit details</button>
          <button className="intro-feature-btn">Add features</button>
        </div>
        <div className="intro-section-2">
          <div className="photo-header">
            <Link to="/photo" className="photo-header-1">
              Photos
            </Link>
            <Link to="/photo" className="photo-header-2">
              See all Photos
            </Link>
          </div>
          <div className="intro-section-2-item">
            {introphotosData.map((value) => (
              <Link
                to="/"
                className="intro-section-2-item-value"
                key={value._id}
              >
                <img src={value.img} alt="" />
              </Link>
            ))}
          </div>
        </div>
        <div className="intro-section-3">
          <div className="intro-section-3-header">
            <Link className="intro-section-3-header-1" to="/friends">
              <h1>Friends</h1>
              <span>2,275 friends</span>
            </Link>
            <Link className="intro-section-3-header-2" to="/friends">
              See all friends
            </Link>
          </div>
          <div className="intro-section-3-item">
            {introfriendsData.map((value) => (
              <Link
                to="/people"
                className="intro-section-3-item-value"
                key={value._id}
              >
                <img src={value.img} alt="" />
                <span>{value.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="studies"></div>
    </div>
  );
}

export default ProfilePost