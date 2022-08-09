import React from 'react'
import {NavLink} from 'react-router-dom'
import './Categories.css'
import cat1 from '../../images/categories1.png'
import cat2 from '../../images/categories2.jpg'
import cat3 from '../../images/categories3.jpg'
import cat4 from '../../images/categories4.jpg'
import cat5 from '../../images/Tshirt-fashion.jfif'
import cat6 from '../../images/men.jfif'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from 'swiper'
const Categories = () => {
  return (
    <section className='categories'>
        {/* <div className="categories-container"> */}
            
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="category">
                <img src={cat1} alt="categories" loading='lazy' />
                <div className="category-info">
                    <p>Winter Fashion</p>
                    <NavLink className={"nav-link"} to="/shop" >Shop Now</NavLink >
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="category">
                <img src={cat4} alt="categories" loading='lazy' />
                <div className="category-info">
                    <p>Woman Fashion</p>
                    <NavLink className={"nav-link"} to="/shop"  >Shop Now</NavLink >
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="category">
                <img src={cat3} alt="categories" loading='lazy' />
                <div className="category-info">
                    <p>Woman Accessories </p>
                    <NavLink className={"nav-link"} to="/shop" >Shop Now</NavLink >
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="category">
                <img src={cat2} alt="categories" loading='lazy' />
                <div className="category-info">
                    <p>Corporate Fashion</p>
                    <NavLink className={"nav-link"} to="/shop" >Shop Now</NavLink >
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="category">
                <img src={cat5} alt="categories" loading='lazy' />
                <div className="category-info">
                    <p>Men Fashion</p>
                    <NavLink className={"nav-link"} to="/shop" >Shop Now</NavLink >
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="category">
                <img src={cat6} alt="categories" loading='lazy' />
                <div className="category-info">
                    <p>Summer Fashion</p>
                    <NavLink className={"nav-link"} to="/shop" >Shop Now</NavLink >
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
         
        {/* </div> */}
    </section>
  )
}

export default Categories


