import React from 'react'
import roki from "../../assets/roki.jpg"
import {Link} from "react-router-dom"
const MarketPlaceCard = () => {
  return (
    <Link className='marketcard' to="/market/1">
        <img src={roki} alt="" />
        <h3>BDT2000</h3>
        <span>Guiter</span>
        <span>Dhaka,Bangladesh</span>
    </Link>
  )
}

export default MarketPlaceCard