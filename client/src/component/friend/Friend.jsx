import React, { useState } from 'react'
import "./friend.css"
import {Link} from "react-router-dom"
import FriendCard from './FriendCard';
import { friendData } from '../demodata/FriendData';
const Friend = () => {
    const [seeBtn,setSeebtn] = useState(false);
  return (
    <div className="friend">
      <div className="friend-content">
        <div className="friend-request">
          <div className="friend-request-head">
            <h3>Friend Requests</h3>
            <Link to="/friend/request">See all</Link>
          </div>
          <div
            className={
              seeBtn ? "friend-request-content-show" : "friend-request-content"
            }
          >
            {friendData
              .filter((item) => item.request === true)
              .map((value) => (
                <FriendCard key={value._id} value={value} />
              ))}
          </div>
          <div
            className={
              seeBtn ? "friend-request-btn-hide" : "friend-request-btn"
            }
          >
            <button onClick={() => setSeebtn(true)}>See more</button>
          </div>
        </div>
        <div className="friend-know">
          <div className="friend-request-head">
            <h3>Friend Requests</h3>
            <Link to="/friend/request">See all</Link>
          </div>
          <div className="friend-know-content">
            {friendData
              .filter((item) => item.request === false)
              .map((value) => (
                <FriendCard key={value._id} value={value} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend