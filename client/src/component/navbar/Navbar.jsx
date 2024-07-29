import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/facebook-logo.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[search,setSearch] = useState(false);
  const[mobileMenu,setMobileMenu] = useState(false);
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
        <div className="mobaile-navbar-bottom"></div>
      </div>
      {/* mobaile navbar  end*/}
    </>
  );
}

export default Navbar