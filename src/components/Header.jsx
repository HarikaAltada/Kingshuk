import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".nav-links").offsetHeight,
        behavior: "smooth",
      });
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="background-img">
      <div className="header-container">
        <a href="https://wa.link/at5ion" className="title-link">
          <div className="title">
            <h4>Kingsukh</h4>
            <h4>Guest House</h4>
          </div>
        </a>
        <button className="toggle-button" onClick={toggleNav}>
          ☰
        </button>
        <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
          <a href="#services" onClick={(e) => handleScroll(e, "services")}>
            Services
          </a>
          <a href="#rooms" onClick={(e) => handleScroll(e, "rooms")}>
            Rooms
          </a>
          <a href="#gallary" onClick={(e) => handleScroll(e, "gallary")}>
            Gallery
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </div>
        <a href="https://wa.link/at5ion">
          <button className="book-now-button">Book Now</button>
        </a>
      </div>
      <div className="main">
        <p className="description">Simple - Unique - Friendly</p>
        <h1 className="main-title">
          Make Yourself At Home <br /> In Our{" "}
          <span className="note">Guest House</span>.
        </h1>
      </div>
      <section>
        <div className="booking">
          <a href="https://wa.link/at5ion">
            <button className="book-now-button">BOOK NOW</button>
          </a>
        </div>
      </section>
    </div>
  );
}
