import React, { useEffect } from "react";
import "./Rooms.css";

export default function Rooms() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".room-card, .room-main");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <section className="room-container" id="rooms">
        <p className="subheader">OUR LIVING ROOM</p>
        <h2 className="section-header">
          The Most Memorable Rest Time Starts Here.
        </h2>
        <div className="rooms">
          <div className="room-card">
            <div className="small-room">
              <img src="./icons/small.jpg" alt="small-room" />
              <div className="card-icons">
                <span>
                  <img src="./icons/icons8-heart-48.png" alt="heart-icon" />
                </span>
                <span>
                  <img
                    src="./icons/icons8-fill-color-30.png"
                    alt="paint-fill"
                  />
                </span>
                <span>
                  <img src="./icons/shield (1).png" alt="star-shield" />
                </span>
              </div>
            </div>
            <div className="room-details">
              <h4>Cozy Haven Room</h4>
              <p>
                Escape to comfort in our Cozy Haven Room, a snug retreat
                designed for intimate relaxation.
              </p>
              <h5>
                Starting from <span>Rs.1000/night</span>
              </h5>
              <a href="https://wa.link/at5ion">
                <button className="book-now-button">BOOK NOW</button>
              </a>
            </div>
          </div>
          <div className="room-main">
            <div className="small-room">
              <img src="./icons/large.jpg" alt="small-room" />
              <div className="card-icons">
                <span>
                  <img src="./icons/icons8-heart-48.png" alt="heart-icon" />
                </span>
                <span>
                  <img
                    src="./icons/icons8-fill-color-30.png"
                    alt="paint-fill"
                  />
                </span>
                <span>
                  <img src="./icons/shield (1).png" alt="star-shield" />
                </span>
              </div>
            </div>
            <div className="room-details">
              <h4>Spacious Serenity Suite</h4>
              <p>
                Indulge in luxury and ample space in our Spacious Serenity
                Suite, where tranquility meets roomy elegance.
              </p>
              <h5>
                Starting from <span>Rs.1500/night</span>
              </h5>
              <a href="https://wa.link/at5ion">
                <button className="book-now-button">BOOK NOW</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
