import React from "react";
import { photoslist } from "./Gallery";
import "./Gallary.css";
export default function Gallary() {
  return (
    <div>
      <section id="gallary">
        <div className="about-content">
          <p className="subheader" style={{ textAlign: "center" }}>
            GALLARY
          </p>
        </div>
        <div class="gallary-container">
          {photoslist.map((photo) => (
            <div key={photo.id} className={photo.key}>
              <img src={photo.photoName} alt={`${photo.id}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
