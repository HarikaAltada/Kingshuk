/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./map.css";
export default function Map() {
  return (
    <div>
      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d914.1261427515961!2d86.8593997!3d23.5862306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1716270302767!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
