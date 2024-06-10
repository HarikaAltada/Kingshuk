import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div>
      <section id="contact" class="section1">
        <div className="container1">
          <div className="contactInfo1">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="./icons/location.png" alt="location" />
                  </span>
                  <span>
                    Beside Barshal Water Tank,
                    <br />
                    Manpur, Barhanti,
                    <br />
                    West Bengal 723156
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./icons/mail.png" alt="mail" />
                  </span>
                  <span>
                    <a href="mailto: kkghosh0099@gmail.com">
                      kkghosh0099@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="./icons/call.png" alt="call" />
                  </span>
                  <span>
                    <a href="tel:+919007062180">+91 9007062180 </a>
                  </span>
                </li>
              </ul>
            </div>
            <ul className="icon">
              <li>
                <a href="#">
                  <img src="./icons/1-.png" alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kingsukhguesthouse/"
                  target="_blank"
                >
                  <img src="./icons/3.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./icons/2.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./icons/5.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div class="contactForm1">
            <h2>Send a Message</h2>
            <div class="formBox1">
              <div class="form__group field message">
                <input
                  type="input"
                  class="form__field"
                  placeholder="First Name"
                  required=""
                />
                <label for="name" class="form__label message">
                  First Name
                </label>
              </div>
              <div class="form__group field message">
                <input
                  type="input"
                  class="form__field"
                  placeholder="Last Name"
                  required=""
                />
                <label for="name" class="form__label">
                  Last Name
                </label>
              </div>
              <div class="form__group field message">
                <input
                  type="email"
                  class="form__field"
                  placeholder="Email"
                  required=""
                />
                <label for="name" class="form__label">
                  Email Address
                </label>
              </div>
              <div class="form__group feild message">
                <input
                  type="input"
                  class="form__field"
                  placeholder="Mobile Number"
                  required=""
                />
                <label for="name" class="form__label">
                  Mobile Number
                </label>
              </div>
              <div class="form__group field area">
                <textarea
                  required=""
                  placeholder="Write your message here..."
                  className="form__field"
                ></textarea>
                <label for="name" class="form__label">
                  Write your message here...
                </label>
              </div>
              <div class="inputBox1 area">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
