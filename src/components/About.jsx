import React from "react";
import "./About.css";
import { useRef, useEffect } from "react";
export default function Main() {
  const imgRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: imgRef, delay: 0 },
      { ref: headerRef, delay: 1 },
      { ref: descriptionRef, delay: 2 },
      { ref: buttonRef, delay: 2.5 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = elements.find(
              (el) => el.ref.current === entry.target
            );
            if (element) {
              setTimeout(() => {
                entry.target.classList.add("active");
              }, element.delay * 1000);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      if (element.ref.current) {
        observer.observe(element.ref.current);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element.ref.current) {
          observer.unobserve(element.ref.current);
        }
      });
    };
  }, []);

  return (
    <section className="section-container" id="about">
      <div className="guesthouse-img">
        <img ref={imgRef} src="./icons/out.jpg" alt="guest-house" />
      </div>
      <div className="about">
        <p className="subheader">ABOUT US</p>
        <h2 ref={headerRef} className="about-header">
          The Best Holidays Start Here!
        </h2>
        <p ref={descriptionRef} className="about-description">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
          <br />
        </p>
        <h4 className="address">
          <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </a>
        </h4>
        <h4 className="contact">
          <a href="tel:+919007062180"> Contact us: +91 9007062180 </a>
        </h4>
        <div className="btn">
          <a href="https://wa.link/at5ion">
            <button ref={buttonRef} class="book-button">
              BOOK NOW
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
