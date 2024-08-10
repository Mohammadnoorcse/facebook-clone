import React from 'react'
import "./home.css"
import HomeLeft from './HomeLeft';
import HomeMiddle from './HomeMiddle';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
       <HomeLeft/>
        
      </div>
      <div className="home-middle">
        <HomeMiddle/>
      </div>
      <div className="home-right"></div>
    </div>
  );
}

export default Home