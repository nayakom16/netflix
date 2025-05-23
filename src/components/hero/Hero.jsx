import React from 'react'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import './hero.css'

import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecard from '../titlecard/Titlecard'


const Hero = () => {
    return (
        <div className='hero'>
            <img src={hero_banner} alt="" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate voluptatum facilis dicta ipsum sed porro, illum nam pariatur ullam iste quidem obcaecati velit, repellendus eveniet impedit nesciunt. Praesentium, excepturi similique.</p>

                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                </div>

                <Titlecard />
            </div>
           
        </div>
    )
}

export default Hero
