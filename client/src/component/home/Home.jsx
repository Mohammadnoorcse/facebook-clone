import React, { useState } from 'react'
import "./home.css"
import HomeLeft from './HomeLeft';
import HomeMiddle from './HomeMiddle';

const Home = () => {
  const [mobailePost, setMobailePost] = useState(false);
  console.log(mobailePost)
  return (
    <div className={mobailePost ? "home-background" : "home"}>
      <div className="home-left">
        <HomeLeft />
      </div>
      <div className="home-middle">
        <HomeMiddle mobailePost={mobailePost} setMobailePost={setMobailePost} />
      </div>
      <div className="home-right"></div>
    </div>
  );
}

export default Home