import React, { useRef, useState } from 'react'
import "./profilepost.css";
import { introdata, introfriendsData, introphotosData } from '../demodata/ProfileData';
import {Link} from "react-router-dom"
import group from "../../assets/moni.jpg"
import mizan from "../../assets/mizan.jpg";
import profile from "../../assets/profile.jpg";
import { postDemo } from '../demodata/PostDemo';
import Post from '../home/Post';

const colors = [
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#000000",
];
const ProfilePost = ({model,setModel}) => {
      const [selectedImages, setSelectedImages] = useState([]);
      const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
      const [selectedColor, setSelectedColor] = useState(null);
      const fileInputRef = useRef(null);
      const profile = true;
     const handleImageClick = () => {
       fileInputRef.current.click();
     };
     const handleFileChange = (event) => {
       const files = event.target.files;
       const imageArray = [];
       for (let i = 0; i < files.length; i++) {
         const file = files[i];
         const reader = new FileReader();
         reader.onloadend = () => {
           imageArray.push(reader.result);
           if (imageArray.length === files.length) {
             setSelectedImages(imageArray);
           }
         };
         reader.readAsDataURL(file);
       }
     };

     const handleColorClick = (color) => {
       setBackgroundColor(color);
       setSelectedColor(color);
     };

     const getTextColor = (bgColor) => {
       return bgColor === "#FFFFFF" || bgColor === "#FFFF00"
         ? "black"
         : "white";
     };

     const getPlaceholderClass = (bgColor) => {
       return bgColor === "#FFFFFF" || bgColor === "#FFFF00"
         ? "placeholder-black"
         : "placeholder-white";
     };
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
      <div className="studies">
        <div className="studies-2">
          <div className="studies-2-1">
            <Link className="studies-2-1-1" to="/profile">
              <img src={mizan} alt="" />
            </Link>
            <div className="studies-2-1-2" onClick={() => setModel(true)}>
              <span>What's on your mind,Mohammad</span>
            </div>
          </div>
          <div className="studies-2-hr"></div>

          <div className="studies-2-2">
            <div className="studies-2-2-1">
              <i class="fa-solid fa-video" style={{ color: "red" }}></i>
              <span>Live video</span>
            </div>
            <div className="studies-2-2-1" onClick={() => setModel(true)}>
              <i class="fa-solid fa-image" style={{ color: "#41B35D" }}></i>
              <span>Photo/video</span>
            </div>
            <div className="studies-2-2-1">
              <i
                class="fa-regular fa-face-smile"
                style={{ color: "#EAB129" }}
              ></i>
              <span>Feeling/activity</span>
            </div>
          </div>
        </div>

        {/* post input pen start*/}
        <div
          className={
            model || selectedImages.length > 0
              ? "studies-post "
              : "mobaile-post-hide"
          }
        >
          <div className="mobaile-post-1">
            <div className="post-1-1" onClick={() => setModel(false)}>
              <span>
                <i class="fa-solid fa-arrow-left"></i>
              </span>
              <span>Create Post</span>
            </div>
            <div className="post-1-2">
              <span>POST</span>
            </div>
          </div>

          <div className="mobaile-post-2"></div>

          <div className="mobaile-post-3">
            <div className="post-3-1">
              <Link to="/profile">
                <img src={mizan} alt="" />
              </Link>
            </div>
            <div className="post-3-2">
              <div className="post-3-2-1">
                <span>Mohammad Noor</span>
              </div>
              <div className="post-3-2-2">
                <span>
                  <i class="fa-solid fa-earth-americas"></i>
                </span>
                <span>public</span>
                <span>
                  <i class="fa-solid fa-caret-down"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="mobaile-post-4">
            <form>
              <textarea
                className={`text-input ${getPlaceholderClass(backgroundColor)}`}
                style={{
                  backgroundColor: backgroundColor,
                  color: getTextColor(backgroundColor),
                }}
                placeholder="What's on your mind?"
              />
              <div className="color-options">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`color-option ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>

              <div
                className={
                  selectedImages.length > 0 ? "prev-img" : "prev-img-hide"
                }
              >
                {selectedImages.map((image, index) => (
                  <img key={index} src={image} alt={`Preview ${index}`} />
                ))}
              </div>

              <div className="post-item">
                <div className="post-item-1">
                  <div className="post-demo-img-1" onClick={handleImageClick}>
                    <span className="demo-icon-1">
                      <i class="fa-regular fa-image"></i>
                    </span>
                    <span className="demo-text-1">photos</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    multiple
                  />
                </div>
                <div className="post-item-2">
                  <span className="post-item-2-icon post-item-2-icon-1">
                    <i class="fa-solid fa-video"></i>
                  </span>
                  <span className="post-item-2-icon-text">Videos</span>
                </div>
                <div className="post-item-2">
                  <span className="post-item-2-icon post-item-2-icon-2">
                    <i class="fa-solid fa-user-plus"></i>
                  </span>
                  <span className="post-item-2-icon-text">Tag friends</span>
                </div>
                <div className="post-item-2">
                  <span className="post-item-2-icon post-item-2-icon-3">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <span className="post-item-2-icon-text">Add location</span>
                </div>
                <div className="post-item-2">
                  <span className="post-item-2-icon post-item-2-icon-4">
                    <i class="fa-solid fa-face-smile"></i>
                  </span>
                  <span className="post-item-2-icon-text">
                    Feeling/acitvitys
                  </span>
                </div>
                <div className="post-item-2">
                  <span className="post-item-2-icon post-item-2-icon-1">
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  <span className="post-item-2-icon-text">Create Event</span>
                </div>
              </div>
              <button className="post-btn">POST</button>
            </form>
          </div>
        </div>
        {/* post input pen end*/}

        {postDemo.map((value) => (
          <Post key={value._id} value={value} profile={profile}/>
        ))}
      </div>
    </div>
  );
}

export default ProfilePost