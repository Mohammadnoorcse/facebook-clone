import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../assets/facebook-logo.svg";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg"
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [selectedImages, setSelectedImages] = useState([]);
  const [mobailePost,setMobailePost] = useState(false);
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

          
        ></div>
      </div>
      {/* mobaile navbar  end*/}
    </>
  );
};

export default Navbar;
