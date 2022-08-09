import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MapImage from '../images/map-image.jpg'
import "../styles/Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <div className="contact-container">
        <div className="contact-address">
          <h4>Find us here</h4>
          <div className="contact-col">
            <div className="contact-icon">
              <MdLocationOn />
            </div>
            <div className="address-info">
              <span>Address</span>  
              PO Box 14122 Collins Street West.Victoria
            </div>
          </div>
          <div className="contact-col">
            <div className="contact-icon">
              <MdEmail />
            </div>
            <div className="address-info">
              <span>Email</span>
              example@example.com
            </div>
          </div>
          <div className="contact-col">
            <div className="contact-icon">
              <BsTelephoneForwardFill />
            </div>
            <div className="address-info">
              <span>Phone</span>
              +1234567890, +10987654321
            </div>
          </div>
          <div className="contact-col">
         <img src={MapImage} alt="map" loading="lazy" />
          </div>
        </div>
        <form action="" method="get" className="contact-from">
          <h2>Get in touch</h2>
          <div className="form-container">
          <div className="form-field">
          <label htmlFor="name">Your Name (required)</label> <br />
          <input type="text" name="name" required placeholder="Enter Your Name" />
          </div>
          <div className="form-field">
          <label htmlFor="email">Your Email (required)</label> <br />
          <input type="email" name="email" required placeholder="Enter Your Email" />
          </div>
          <div className="form-field">
          <label htmlFor="subject">Subject</label> <br />
          <input type="text" name="subject" required placeholder="Enter Your Subject" />
          </div>
          <div className="form-field">
          <label htmlFor="massage">Massage</label> <br />
         <textarea name="massage" id="" cols="30" rows="5" placeholder="Write your massage here"></textarea>
          </div>
          <input type="submit" value="Send Massage" className="submit" />
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
