import React from 'react'
import "./marketplace.css"
import { Link } from 'react-router-dom';
import MarketPlaceCard from './MarketPlaceCard';
const MarketPlace = () => {
  return (
    <div className="marketplace">
      <div className="marketplace-content">
        <div className="marketplace-head">
          <h2>Today's picks</h2>
          <Link to="/location" className="marketplace-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>ঢাকা · 65 km</span>
          </Link>
        </div>
        <div className="marketplace-item">
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
          <MarketPlaceCard/>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace