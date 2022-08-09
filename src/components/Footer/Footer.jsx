import React from 'react'

import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <ul className="footer-list">
                <h4>About The Store</h4>
                
                <li style={{display:"flex",alignItem:"center"}}><MdLocationOn size={"1.5rem"}/> Wonder Street, USA, New York</li>
                <li style={{display:"flex",alignItem:"center"}}> <BsFillTelephoneForwardFill size={"1rem"}/>+1-541-754-3010  </li>
                <li style={{display:"flex",alignItem:"center"}}> <IoMdMail size={"1rem"}/> Hello@vouge.com</li>
            </ul>
            <ul className="footer-list">
                <h4>Quick Links</h4>
                <li><a href="#category">Categories</a></li>
                <li><a href="#woman">Woman Fashion</a></li>
                <li><a href="#discount">Super Sale</a></li>
                <li> <a href="#feature">Feature Product</a></li>
            </ul>
            <ul className="footer-list">
                <h4>Customer Support</h4>
                <li>Payment Method</li>
                <li>Product Returns</li>
                <li>Terms & Conditions </li>
                <li>Order Tracking</li>
            </ul>
            <ul className="footer-list newsletter">
                <h4>Newsletter</h4>
                <li>To get the latest news and latest updates from us.</li>
                <li>Your E-mail Address:</li>
                <li> <input type="email" placeholder='Enter your email' className='input-mail'/></li>
                <li> <input type="submit" value={"Subscribe"} className="input-btn"/></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer