import React from 'react'
import { postDemo } from '../demodata/PostDemo';
import "./group.css"
import Post from '../home/Post';
const Group = () => {
    const profile=false;
  return (
    <div className="group-section">
      <div className="group-content">
        {postDemo.map((value) => (
          <Post key={value._id} value={value} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default Group