import React from "react";
import "./Services.css";
import icon1 from "../../images/customer-service.png";
import icon2 from "../../images/return-on-investment.png";
import icon3 from "../../images/shipped.png";
import icon4 from "../../images/exchange.png";
import icon5 from "../../images/discounts.png";
const Services = () => {
  return (
    <section className="service">
      <div className="service-container">
        <div className="service-icon">
          <div className="service-img">
            <img src={icon1} alt="" width={"75px"} loading="lazy" />
          </div>
          <p>24/7 Customer Supports</p>
        </div>
        <div className="service-icon">
          <div className="service-img">
            <img src={icon2} alt="" width={"75px"}  loading="lazy"/>
          </div>
          <p>Easiest Return Policy</p>
        </div>
        <div className="service-icon">
          <div className="service-img">
            <img src={icon3} alt="" width={"75px"} loading="lazy" />
          </div>
          <p>Fastest Delivery In Country</p>
        </div>
        <div className="service-icon">
          <div className="service-img">
            <img src={icon4} alt="" width={"75px"} loading="lazy" />
          </div>
          <p>Return Product In 7 Days</p>
        </div>
        <div className="service-icon">
          <div className="service-img">
            <img src={icon5} alt="" width={"75px"} loading="lazy" />
          </div>
          <p>Best Discount Coupon </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
