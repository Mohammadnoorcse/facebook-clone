import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import demo from "../../assets/demo-1.png";
import mizan from "../../assets/mizan.jpg"
import StoryCard from './StoryCard';
import { storyData } from '../demodata/storyData';
import profile from "../../assets/profile.jpg";
import { postDemo } from '../demodata/PostDemo';
import Post from './Post';

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
const HomeMiddle = ({mobailePost,setMobailePost}) => {
     const scrollerRef = useRef(null);
     const [count, setCount] = useState(0);
     const [selectedImages, setSelectedImages] = useState([]);
     const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
     const [selectedColor, setSelectedColor] = useState(null);
    //  const [mobailePost, setMobailePost] = useState(false);
     const fileInputRef = useRef(null);

     const profile = false;

    const scrollLeft = () => {
        scrollerRef.current.scrollBy({
          left: -200, // Adjust this value for how far to scroll on each click
          behavior: "smooth",
        });
        if(count>0){
            setCount(count-1);
        }
      };
   
     const scrollRight = () => {
       scrollerRef.current.scrollBy({
         left: 200, // Adjust this value for how far to scroll on each click
         behavior: "smooth",
       });
       setCount(count+1);
     };

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
    <div className="homemiddle">
      <div className="homemiddle-1" ref={scrollerRef}>
        <Link to="/create" className="homemiddle-create">
          <img src={demo} alt="demo" />
          <span>create story</span>
          <div className="homemiddle-plus">
            {/* <span>+</span> */}
            <div className="homemiddle-plus-1">
              <span>+</span>
            </div>
          </div>
        </Link>

        {storyData.map((value) => (
          <StoryCard key={value._id} value={value} />
        ))}
      </div>
      {/* story button start */}
      <div
        className={count > 0 ? "click-button-left" : "story-active-hide"}
        onClick={scrollLeft}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div className="click-button-right" onClick={scrollRight}>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      {/* story button end */}

      <div className="homemiddle-2">
        <div className="homemiddle-2-1">
          <Link className="homemiddle-2-1-1" to="/profile">
            <img src={mizan} alt="" />
          </Link>
          <div
            className="homemiddle-2-1-2"
            onClick={() => setMobailePost(true)}
          >
            <span>What's on your mind,Mohammad</span>
          </div>
        </div>
        <div className="homemiddle-2-hr"></div>

        <div className="homemiddle-2-2">
          <div className="homemiddle-2-2-1">
            <i class="fa-solid fa-video" style={{ color: "red" }}></i>
            <span>Live video</span>
          </div>
          <div
            className="homemiddle-2-2-1"
            onClick={() => setMobailePost(true)}
          >
            <i class="fa-solid fa-image" style={{ color: "#41B35D" }}></i>
            <span>Photo/video</span>
          </div>
          <div className="homemiddle-2-2-1">
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
          mobailePost || selectedImages.length > 0
            ? "homemiddle-post"
            : "mobaile-post-hide"
        }
      >
        <div className="mobaile-post-1">
          <div className="post-1-1" onClick={() => setMobailePost(false)}>
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
              <img src={profile} alt="" />
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
                <span className="post-item-2-icon-text">Feeling/acitvitys</span>
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

      {
        postDemo.map((value)=>(
          <Post key={value._id} value={value} profile={profile}/>
        ))
      }
    </div>
  );
}

export default HomeMiddle