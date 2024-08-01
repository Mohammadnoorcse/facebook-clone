import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/facebook-logo.svg";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg"

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

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [selectedImages, setSelectedImages] = useState([]);
  const [mobailePost,setMobailePost] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [selectedColor, setSelectedColor] = useState(null);
  const fileInputRef = useRef(null);



   const handleLinkClick = (link) => {
     setActiveLink(link);
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
    <>
      {/* mobaile navbar  start*/}
      <div className="mobaile-navbar ">
        <div className="mobaile-navbar-top">
          <div className="mobaile-top-left">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="mobaile-top-right">
            <div className="mobaile-top-right-1">
              <i
                class="fa-solid fa-magnifying-glass"
                onClick={() => setSearch(!search)}
              ></i>
              <div
                className={
                  search
                    ? "mobaile-top-right-1-abosolute"
                    : "mobaile-top-right-1-abosolute-hide"
                }
              >
                <i
                  class="fa-solid fa-arrow-left"
                  onClick={() => setSearch(false)}
                ></i>
                <input type="text" placeholder="Search" />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="mobaile-top-right-2">
              <i
                class="fa-solid fa-bars"
                onClick={() => setMobileMenu(!mobileMenu)}
              ></i>
            </div>
          </div>

          <div
            className={mobileMenu ? "mobaile-menubar" : "mobaile-menubar-hide"}
          ></div>
        </div>

        <div className="mobaile-navbar-bottom">{/* after working */}</div>

        {/* last navbar section */}
        <div className="mobaile-icon-navbar">
          <div className="mobaile-icon-navbar-first">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <i
                className={`fa-solid fa-house ${
                  activeLink === "/" ? "active" : ""
                }`}
              ></i>
            </Link>
            <Link to="/user-plus" onClick={() => handleLinkClick("/user-plus")}>
              <i
                className={`fa-solid fa-user-plus ${
                  activeLink === "/user-plus" ? "active" : ""
                }`}
              ></i>
            </Link>
            <Link to="/messenger" onClick={() => handleLinkClick("/messenger")}>
              <i
                className={`fa-brands fa-facebook-messenger ${
                  activeLink === "/messenger" ? "active" : ""
                }`}
              ></i>
            </Link>
            <Link
              to="/notifications"
              onClick={() => handleLinkClick("/notifications")}
            >
              <i
                className={`fa-regular fa-bell ${
                  activeLink === "/notifications" ? "active" : ""
                }`}
              ></i>
            </Link>
            <Link to="/cart" onClick={() => handleLinkClick("/cart")}>
              <i
                className={`fa-solid fa-cart-plus ${
                  activeLink === "/cart" ? "active" : ""
                }`}
              ></i>
            </Link>
          </div>
        </div>
        <div className="hr-mobaile"></div>
        <div className="mobaile-icon-navbar-second">
          <div className="mobaile-icon-navbar-second-1">
            <Link to="/profile">
              <img src={profile} alt="" />
            </Link>
          </div>
          <div
            className="mobaile-icon-navbar-second-2"
            onClick={() => setMobailePost(true)}
          >
            <span>What's on your mind?</span>
          </div>
          <div className="mobaile-icon-navbar-second-3">
            <div className="demo-img" onClick={handleImageClick}>
              <span className="demo-icon">
                <i class="fa-regular fa-image"></i>
              </span>
              <span className="demo-text">photo</span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              multiple
            />
          </div>
        </div>
        <div className="hr-mobaile"></div>

        <div
          className={
            mobailePost || selectedImages.length > 0
              ? "mobaile-post"
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
      </div>
      {/* mobaile navbar  end*/}
    </>
  );
};

export default Navbar;
