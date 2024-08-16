import React, { useState } from 'react'
import "./profile.css"
import group from "../../assets/roki.jpg"
import { Link,useNavigate } from 'react-router-dom'
import ProfilePost from './ProfilePost'
import ProfileAbout from './ProfileAbout'
import ProfileFriends from './ProfileFriends'
import ProfilePhotos from './ProfilePhotos'
import ProfileVideos from './ProfileVideos'
const Profile = () => {

  const [activeLink, setActiveLink] = useState("post");
  const [model, setModel] = useState(false);

   const navigateToSection = (section) => {
      setActiveLink(section);
   };
   
  return (
    <div className={model ? "profile-click" : "profile"}>
      <div className="profile-head">
        <div className="profile-cover">
          <div className="profile-cover-1">
            <img src={group} alt="" />
            <div className="pofile-cover-edit">
              <i class="fa-solid fa-camera"></i>
              <span>Edit profile cover</span>
            </div>
          </div>
          <div className="profile-cover-2">
            <div className="profile-content">
              <div className="profile-content-1">
                <div className="profile-img">
                  <img src={group} alt="" />
                  <div className="profile-edit">
                    <i class="fa-solid fa-camera"></i>
                  </div>
                </div>
                <div className="profile-value">
                  <div className="profile-value-1">
                    <h2>Mohammad Noor</h2>
                    <span>2.2k friends</span>
                  </div>
                  <div className="profile-value-2">
                    <div className="profile-value-2-1">
                      <Link className="friend-item" to="/friend">
                        <img src={group} alt="" />
                      </Link>
                      <Link className="friend-item" to="/friend">
                        <img src={group} alt="" />
                      </Link>
                      <Link className="friend-item" to="/friend">
                        <img src={group} alt="" />
                      </Link>
                      <Link className="friend-item" to="/friend">
                        <img src={group} alt="" />
                      </Link>
                      <Link className="friend-item" to="/friend">
                        <img src={group} alt="" />
                      </Link>
                    </div>
                    <div className="profile-value-2-2">
                      <div className="add-story">
                        <i class="fa-solid fa-plus"></i>
                        <span>Add to story</span>
                      </div>
                      <div className="edit-profile">
                        <i class="fa-solid fa-pen"></i>
                        <span>Edit to profile</span>
                      </div>
                      <div className="edit-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-hr"></div>
            <div className="profile-item">
              <div className="profile-item-1">
                <div
                  className={
                    activeLink === "post"
                      ? "pofile-item-button active"
                      : "pofile-item-button"
                  }
                  onClick={() => navigateToSection("post")}
                >
                  <span>Posts</span>
                </div>
                <div
                  className={
                    activeLink === "about"
                      ? "pofile-item-button active"
                      : "pofile-item-button"
                  }
                  onClick={() => navigateToSection("about")}
                >
                  <span>About</span>
                </div>
                <div
                  className={
                    activeLink === "friends"
                      ? "pofile-item-button active"
                      : "pofile-item-button"
                  }
                  onClick={() => navigateToSection("friends")}
                >
                  <span>Friends</span>
                </div>
                <div
                  className={
                    activeLink === "photos"
                      ? "pofile-item-button active"
                      : "pofile-item-button"
                  }
                  onClick={() => navigateToSection("photos")}
                >
                  <span>Photos</span>
                </div>
                <div
                  className={
                    activeLink === "videos"
                      ? "pofile-item-button active"
                      : "pofile-item-button"
                  }
                  onClick={() => navigateToSection("videos")}
                >
                  <span>Videos</span>
                </div>
                <div
                  className={
                    activeLink === "more"
                      ? "pofile-item-button active"
                      : "pofile-item-button"
                  }
                  onClick={() => navigateToSection("more")}
                >
                  <span>More</span>
                </div>
              </div>
              <div className="profile-item-2">
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-section">
        {activeLink === "post" ? (
          <>
            <ProfilePost model={model} setModel={setModel} />
          </>
        ) : activeLink === "about" ? (
          <>
            <ProfileAbout />
          </>
        ) : activeLink === "friends" ? (
          <>
            <ProfileFriends />
          </>
        ) : activeLink === "photos" ? (
          <>
            <ProfilePhotos />
          </>
        ) : activeLink === "videos" ? (
          <>
            <ProfileVideos />
          </>
        ) : activeLink == "more" ? (
          <>
            <span>working</span>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Profile