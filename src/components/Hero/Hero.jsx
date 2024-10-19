import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {

    return (
        <div className='hero'>

            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                        <p className='tagline'>Shop. Style. Shine.</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    
                    <p>Collections for Everyone !</p>
                </div>
                <div className="hero-latest-btn">
                    <div className='latest-collection'>
                        Latest Collection 
                    <span><img src={arrow_icon} alt="" /></span>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}

export default Hero