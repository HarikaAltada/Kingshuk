/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="section__container footer__container">
          <div class="footer__col">
            <div class="logo">
              <a href="#home">
                {" "}
                <h4>Kingsukh Guest House</h4>
              </a>
            </div>
            <p class="section__description">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <a href="https://wa.link/at5ion">
              <button class="bt">BOOK NOW</button>
            </a>
          </div>
          <div class="footer__col">
            <h4>QUICK LINKS</h4>
            <ul class="footer__links">
              <li>
                <a href="#">Browse Destinations</a>
              </li>
              <li>
                <a href="#">Special Offers &amp; Packages</a>
              </li>
              <li>
                <a href="#">Room Types &amp; Amenities</a>
              </li>
              <li>
                <a href="#">Customer Reviews &amp; Ratings</a>
              </li>
              <li>
                <a href="#">Travel Tips &amp; Guides</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>OUR SERVICES</h4>
            <ul class="footer__links">
              <li>
                <a href="#">Concierge Assistance</a>
              </li>
              <li>
                <a href="#">Flexible Booking Options</a>
              </li>
              <li>
                <a href="#">Airport Transfers</a>
              </li>
              <li>
                <a href="#">Wellness &amp; Recreation</a>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>CONTACT US</h4>
            <ul class="footer__links">
              <li>
                <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
                  Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                  Bengal 723156
                </a>
              </li>
              <li>
                <a href="mailto: kkghosh0099@gmail.com">
                  kkghosh0099@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919007062180">+91 9007062180 </a>
              </li>
            </ul>
            <div class="footer__socials">
              <a href="#">
                <img src="./icons/facebook.png" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
              >
                <img src="./icons/instagram.png" alt="instagram" />
              </a>
              <a href="#">
                <img src="./icons/youtube.png" alt="youtube" />
              </a>
              <a href="#">
                <img src="./icons/twitter.png" alt="twitter" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer__bar">
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
