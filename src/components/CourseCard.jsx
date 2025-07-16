import React from "react";
import "./styling/CourseCard.css";

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h4 className="course-title">{title}</h4>
        <p className="course-description">{description}</p>
        <button className="course-button" type="button">
          Join now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
