import React from 'react'

const Comment = ({item}) => {
  return (
    <div className="post-comment">
      <div className="post-comment-1">
        <img src={item.img} alt="" />
      </div>
      <div className="post-comment-2">
        <div className="post-comment-2-1">
          <h3>{item.name}</h3>
          <span>{item.comment}</span>
        </div>
        <div className="post-comment-2-2">
          <span>{item.time}M</span>
          <span className="post-comment-2-2-1">Like</span>
          <span className="post-comment-2-2-1">Reply</span>
        </div>
      </div>
    </div>
  );
}

export default Comment