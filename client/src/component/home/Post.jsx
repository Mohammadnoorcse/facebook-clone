import React, { useState } from 'react';
import {Link} from "react-router-dom";
import img1 from "../../assets/profile.jpg"
import Comment from './Comment';
const Post = ({value,profile}) => {

   const [hover, setHover] = useState(false);
   const [selectedEmoji, setSelectedEmoji] = useState(null);
   const [comment,setComment] = useState(false);
   const [commentElement,setCommentElement] = useState(null);
   
  const emojis = ["😊", "😂", "😍", "🎉", "👍"];
  const handleEmojiClick = (emoji) => {
      setSelectedEmoji(emoji);
    };

  const handleCommentClick =(id) =>{
    setCommentElement(id);
    setComment(!comment);
  }

  
  return (
    <div className={profile ? "profile-post-cj" : "home-post"}>
      <div className="home-post-1">
        <Link className="home-post-1-1" to="/profile">
          <img src={value.profile} alt="" />
        </Link>
        <Link className="home-post-1-2" to="/profile">
          <h3>{value.name}</h3>
          <span>{value.time} ago days</span>
        </Link>
      </div>
      <div className="home-post-2">
        <span>{value.text}</span>
      </div>
      {value.images.length > 0 && (
        <div className="home-post-3">
          {value.images.length === 1 ? (
            <>
              <Link className="home-post-3-1" to="/image/1">
                <img src={value.images[0]} alt="" />
              </Link>
            </>
          ) : value.images.length === 2 ? (
            <>
              <Link className="home-post-3-2" to="/image/1">
                <img src={value.images[0]} alt="" />
                <img src={value.images[1]} alt="" />
              </Link>
            </>
          ) : value.images.length === 3 ? (
            <>
              <Link className="home-post-3-3" to="/image/1">
                <img src={value.images[0]} alt="" />
              </Link>
              <Link className="home-post-3-4" to="/image/1">
                <img src={value.images[1]} alt="" />
                <img src={value.images[2]} alt="" />
              </Link>
            </>
          ) : (
            <>
              <Link className="home-post-3-5" to="/image/1">
                <img src={value.images[0]} alt="" />
              </Link>
              <Link className="home-post-3-6" to="/image/1">
                <div>
                  <img src={value.images[1]} alt="" />
                </div>
                <div className="home-post-3-6-last">
                  <img src={value.images[2]} alt="" />
                  <div className="home-post-3-7">
                    <span>+{value.images.length - 3}</span>
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
      )}

      {value.video && (
        <div className="home-post-7">
          <video src={value.video} controls autoPlay muted />
        </div>
      )}

      <div className="home-post-5">
        {selectedEmoji && (
          <div className="selected-emoji">
            {selectedEmoji}
            You and 10 others
          </div>
        )}
        {value.comments.length > 0 && (
          <div>
            <span>{value.comments.length} comments</span>
          </div>
        )}
      </div>
      <div className="home-post-hr"></div>
      <div className="home-post-4">
        <div
          className="home-post-4-1 home-post-4-0"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <i class="fa-regular fa-thumbs-up"></i>
          <span>Like</span>

          <div className="emoji-container">
            {emojis.map((emoji, index) => (
              <span
                key={index}
                className={`emoji ${hover ? "show" : ""}`}
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
        <div
          className="home-post-4-2 home-post-4-0"
          onClick={() => handleCommentClick(`${value._id}`)}
        >
          <i class="fa-regular fa-comment"></i>
          <span>Comment</span>
        </div>
        <div className="home-post-4-3 home-post-4-0">
          <i class="fa-solid fa-link"></i>
          <span>Copy</span>
        </div>
        <div className="home-post-4-4 home-post-4-0">
          <i class="fa-solid fa-share"></i>
          <span>Share</span>
        </div>
      </div>
      <div className="home-post-hr"></div>
      <div
        className={
          commentElement === `${value._id}` && comment
            ? "home-post-6"
            : "mobaile-post-hide"
        }
      >
        <div className="home-post-6-1">
          <div className="home-post-6-1-1">
            <img src={img1} alt="" />
          </div>
          <div className="home-post-6-1-2">
            <form action="">
              <div className="home-post-6-1-2-1">
                <input type="text" placeholder="Answer as Mohammad Noor" />
              </div>
              <div className="home-post-6-1-2-2">
                <div className="home-post-6-1-2-2-1">
                  <i class="fa-regular fa-face-surprise"></i>
                  <i class="fa-regular fa-face-sad-cry"></i>
                  <i class="fa-regular fa-face-meh"></i>
                  <i class="fa-regular fa-face-laugh-squint"></i>
                </div>
                <div className="home-post-6-1-2-2-2">
                  <i class="fa-solid fa-play"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* comment */}
        {value.comments.map((item, index) => (
          <Comment key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Post