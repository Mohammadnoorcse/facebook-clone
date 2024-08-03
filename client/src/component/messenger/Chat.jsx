import React from 'react'
import {Link} from "react-router-dom"
import profile from "../../assets/profile.jpg"
const Chat = ({value}) => {
    const active = value.active;
  return (
    <Link to="/" className="messenger-chat">
      <div className="messenger-chat-1">
        <img src={value.profile} alt="" />

      </div>
      <div className="messenger-chat-2">
        <h3 className="chatname">{value.name}</h3>
        <span className="chat-text">You: {value.text}</span>
      </div>

      <div className="messenger-chat-3">
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      {
        active?<>
        <div className="messenger-chat-4"></div>
        
        </>:<></>
      }
      
    </Link>
  );
}

export default Chat