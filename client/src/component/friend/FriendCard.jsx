import React from 'react'
import roki from "../../assets/roki.jpg"
import { Link } from 'react-router-dom';
const FriendCard = ({value}) => {
    const request = value.request;
    // const matural=""
  return (
    <Link className="friendcard" to={`/friend/${value._id}`}>
      <div className="friendcard-1">
        <img src={value.profile} alt="" />
      </div>
      <div className="friendcard-2">
        <h3>{value.name}</h3>
        {
            value.matural?<span>120 matural friends</span>:<span>No maturl friends</span>
        }
        
        <button
          style={
            request
              ? { background: "#0861F2", color: "white" }
              : { background: "#DFE9F2", color: "#0861F2" }
          }
        >
          {request ? "Confirm" : "Add friend"}
        </button>
        <button className="friendcard-2-btn2">
          {request ? "Delete" : "Remove"}
        </button>
      </div>
    </Link>
  );
}

export default FriendCard