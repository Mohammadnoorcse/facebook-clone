import React from 'react'
import notfound from "../../assets/notfound.png"
const NotFoundMemories = () => {
  return (
    <div className="NotFoundMemories">
      <div className="NotFoundMemories-1">
        <img src={notfound} alt="" />
      </div>
      <div className="NotFoundMemories-2">
        <h3>No memories today</h3>
        <span>
          There aren't any Memories to see or share today, but we'll let you
          know when you have some to look back on.
        </span>
      </div>
    </div>
  );
}

export default NotFoundMemories