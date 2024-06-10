// services.js
import React, { useEffect } from "react";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    const handleScroll = () => {
      const serviceList = document.querySelector(".service-list");
      const serviceListPosition = serviceList.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (serviceListPosition < screenPosition) {
        serviceList.classList.add("animate");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="services" id="services">
        <div className="service-container">
          <div className="service-content">
            <p className="subheader">SERVICES</p>
            <h2 className="section-header">Strive Only For The Best.</h2>
            <ul className="service-list">
              <li>
                <span>
                  <img src="./icons/shield (1).png" alt="shield" />
                </span>
                High Class Security
              </li>
              <li>
                <span>
                  <img src="./icons/delivery.png" alt="delivery" />
                </span>
                24 Hours Room Service
              </li>
              <li>
                <span>
                  <img src="./icons/restaurant.png" alt="restaurant" />
                </span>
                Restaurant
              </li>
              <li>
                <span>
                  <img
                    src="./icons/8679522_map_2_line_icon (1).png"
                    alt="map"
                  />
                </span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="banner-container">
        <div className="banner-content">
          <div className="banner-card">
            <h4>100+</h4>
            <p>Bookings Completed</p>
          </div>
          <div className="banner-card">
            <h4>150+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </div>
  );
}
