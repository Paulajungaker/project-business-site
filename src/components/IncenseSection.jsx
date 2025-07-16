import React from "react";
import "./styling/IncenseSection.css";

const IncenseSection = () => {
  return (
    <div className="incense-section">
      <h2 className="incense-title">Eco Incense</h2>
      <p className="incense-text">
        Sustainable, handcrafted incense for mindful living
      </p>
      <img
        src="./images/image-incense.jpg"
        alt="incense"
        className="incense-image"
      />
      <button type="button" className="incense-button">
        Shop Incense
      </button>
    </div>
  );
};

export default IncenseSection;
