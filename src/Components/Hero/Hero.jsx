import React from 'react'
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";


//Here is Website main page is integerated and added in side the Shope page
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <dic className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </dic>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
