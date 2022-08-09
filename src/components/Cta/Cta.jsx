import React from 'react'
import './Cta.css'
import ctaImg from '../../images/slider-5.jpg'
import { NavLink } from 'react-router-dom'
const Cta = () => {
  return (
    <section className='cta'>
        <div className="cta-container">
            <img src={ctaImg} alt="" className="cta-img" />
            <div className="cta-info">
                <h2>Upto 50% Off</h2>
                <h4>New collection 2022</h4>
                <NavLink to="/shop" className="cta-btn">Shop Now</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Cta