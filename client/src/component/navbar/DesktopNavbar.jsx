import React, { useState } from 'react'
import "./desktop.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/facebook.png"
import profile from "../../assets/profile.jpg"
import Chat from '../messenger/Chat'
import { demochat } from '../demodata/DemoChat'
import Notification from '../messenger/Notification'
import { demonotification } from '../demodata/DemoNotification'

const DesktopNavbar = () => {
    const [searchItem,setSearchItem] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [position,setPosition] = useState(false)
    const handleLinkClick = (link) => {
      setActiveLink(link);
      setPosition(!position);
      
    };
  return (
    <div className="desktop-navbar">
      <div className="desktop-navbar-1">
        <div className="desktop-1-1">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="desktop-1-2" onClick={() => setSearchItem(true)}>
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>Search Facebook</span>
        </div>
      </div>
      <div className="desktop-navbar-2">
        <Link
          className="desktop-2-1"
          onClick={() => handleLinkClick("/")}
          to="/"
        >
          <i
            className={`fa-solid fa-house ${
              activeLink === "/" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-2-1-1">
            <span>Home</span>
          </div>
        </Link>
        <Link
          className="desktop-2-1"
          onClick={() => handleLinkClick("/marketplace")}
          to="/marketplace"
        >
          <i
            className={`fa-solid fa-store ${
              activeLink === "/marketplace" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-2-1-1">
            <span>Market</span>
          </div>
        </Link>
        <Link
          className="desktop-2-1"
          onClick={() => handleLinkClick("/groups")}
          to="/groups"
        >
          <i
            className={`fa-solid fa-people-group ${
              activeLink === "/groups" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-2-1-1">
            <span>Groups</span>
          </div>
        </Link>
        <Link
          className="desktop-2-1"
          onClick={() => handleLinkClick("/game")}
          to="/game"
        >
          <i
            className={`fa-solid fa-gamepad ${
              activeLink === "/game" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-2-1-1">
            <span>Gaming</span>
          </div>
        </Link>
      </div>

      <div className="desktop-navbar-3">
        <div className="desktop-3-1" onClick={() => handleLinkClick("/menu")}>
          <i
            className={`fa-solid fa-table-cells ${
              activeLink === "/menu" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-3-1-1">
            <span>Menu</span>
          </div>
        </div>
        <div
          className="desktop-3-1"
          onClick={() => handleLinkClick("/messenger")}
        >
          <i
            className={`fa-brands fa-facebook-messenger ${
              activeLink === "/messenger" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-3-1-1">
            <span>messenger</span>
          </div>
        </div>
        <div
          className="desktop-3-1"
          onClick={() => handleLinkClick("/notification")}
        >
          <i
            className={`fa-solid fa-bell ${
              activeLink === "/notification" ? "active" : ""
            }`}
          ></i>
          <div className="desktop-3-1-1">
            <span>Notifications</span>
          </div>
        </div>
        <div
          className="desktop-3-1 desktop-3-2"
          onClick={() => handleLinkClick("/profile")}
        >
          <img src={profile} alt="" />

          <div className="desktop-3-1-1">
            <span>Account</span>
          </div>
        </div>
      </div>

      {/* search item */}

      <div className={searchItem ? "searchItem" : "display"}>
        <div className="searchitem-1">
          <i
            class="fa-solid fa-arrow-left"
            onClick={() => setSearchItem(false)}
          ></i>
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="searchitem-2">
          <span>Recent</span>
          <Link to="/">Edit</Link>
        </div>
        <div className="searchitem-3">
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
          <Link className="searchitem-3-1" to="/">
            <div className="searchitem-3-1-1">
              <img src={profile} alt="" />
              <span>Mohammad Noor</span>
            </div>
            <div className="searchitem-3-1-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Link>
        </div>
      </div>

      {/*menu item*/}
      <div
        className={` ${
          activeLink === "/menu" && position ? "menuItem" : "display"
        }`}
      >
        <h1>Menu</h1>
        <div className="menuItem-1">
          <div className="menu-section-1">
            <div className="menu-section-1-1">
              <input type="text" placeholder="Search Menu" />
            </div>
            <div className="menu-section-1-2">
              <h2>Social</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-calendar-check"
                    style={{ color: "#E13A56" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Events</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-users" style={{ color: "#1A7CE9" }}></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Friends</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-people-line"
                    style={{ color: "#5ACDBD" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Groups</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-file-lines"
                    style={{ color: "#1C8CEB" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">News Feed</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-clapperboard"
                    style={{ color: "#1C8CEB" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Feeds</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-flag" style={{ color: "#E6632A" }}></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Pages</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
            <div className="menu-section-1-2">
              <h2>Entertainment</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-ticket"
                    style={{ color: "#1F94E3" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Gaming Video</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-gamepad"
                    style={{ color: "#1F94E3" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Play Game</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-file-video"
                    style={{ color: "#EC5C76" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Live Videos</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
            <div className="menu-section-1-2">
              <h2>Shopping</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-brands fa-cc-visa"
                    style={{ color: "#031E47" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Orders and Payments</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-house" style={{ color: "#258DD6" }}></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Market Place</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
            <div className="menu-section-1-2">
              <h2>Personal</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-image" style={{ color: "#1877E7" }}></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Recent and Actvity</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-regular fa-clock"
                    style={{ color: "#1D8FE0" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Memories</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-solid fa-bookmark"
                    style={{ color: "#B341BB" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Saved</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
            <div className="menu-section-1-2">
              <h2>Professional</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-wifi" style={{ color: "#1D8CF6" }}></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Ad Manager</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
            <div className="menu-section-1-2">
              <h2>Community Resources</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-tree" style={{ color: "#32BD54" }}></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Climate science center</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i
                    class="fa-brands fa-gratipay"
                    style={{ color: "#E13A56" }}
                  ></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Fundraisers</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
            <div className="menu-section-1-2">
              <h2>More from Meta</h2>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Events</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
              <Link to="/menu-item" className="menu-section-1-2-1">
                <div className="menu-section-1-2-1-1">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
                <div className="menu-section-1-2-1-2">
                  <span className="menu-header">Events</span>
                  <span className="menu-text">
                    Organize or find events and other things.
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="menu-section-2">
            <h2>Create</h2>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-regular fa-square-plus"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Post</span>
              </div>
            </Link>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Story</span>
              </div>
            </Link>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-film"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Reels</span>
              </div>
            </Link>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-sun"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Life event</span>
              </div>
            </Link>
            <div className="bottom-border"></div>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-flag"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Page</span>
              </div>
            </Link>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-bullhorn"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Ad</span>
              </div>
            </Link>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-users"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Group</span>
              </div>
            </Link>
            <Link to="/" className="menu-section-2-1">
              <div className="menu-section-2-1-1">
                <i class="fa-solid fa-book"></i>
              </div>
              <div className="menu-section-2-1-2">
                <span>Event</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* messanger */}
      <div
        className={` ${
          activeLink === "/messenger" && position ? "messenger" : "display"
        }`}
      >
        <div className="messenger-1">
          <span>Chats</span>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="messenger-2">
          <input type="text" placeholder="Search Messenger" />
        </div>
        <div className="messenger-3">
          <span className="messenger-3-active">Inbox</span>
          <span>Communities</span>
        </div>
        <div className="messenger-4">
          {demochat.map((value) => (
            <Chat key={value._id} value={value} />
          ))}
        </div>
      </div>

      {/* notification */}
      <div
        className={` ${
          activeLink === "/notification" && position
            ? "notification"
            : "display"
        }`}
      >
        <div className="notification-1">
          <span>Notifications</span>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="notification-2">
          <span className="notification-2-active">All</span>
          <span>Unread</span>
        </div>

        {demonotification.map((value) => (
          <Notification key={value._id} value={value} />
        ))}
      </div>

      {/* profile */}
      <div
        className={` ${
          activeLink === "/profile" && position ? "account" : "display"
        }`}
      >
        <div className="account-1">
          <Link to="/" className="account-1-1">
            <img src={profile} alt="" />
            <span>Mohammad Noor</span>
          </Link>
          <div className="account-1-hr"></div>
          <Link to="/" className="account-1-1">
            <div className="account-1-1-img">
              <img src={profile} alt="" />
            </div>
            <span>Mohammad Noor</span>
          </Link>
          <Link to="/" className="account-1-1">
            <div className="account-1-1-img">
              <img src={profile} alt="" />
            </div>
            <span>Mohammad Noor</span>
          </Link>
          <div className="account-1-hr"></div>

          <button className='account-1-button'>See all Profiles</button>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar