import React from 'react'
import { NavLink } from 'react-router-dom'
import heroImg from '../../images/banner-1.png'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <img src={heroImg} alt="hero-banner" loading='lazy'/>
        <div className="hero-info">
            <p className='hero-subtitle'>New Summer Collection</p>
           <h1 className='hero-title'>
           Final Sale For 2022 
            </h1>
            <NavLink to="/shop" className="hero-btn">Explore Now</NavLink>
        </div>
    </section>
  )
}

export default Hero