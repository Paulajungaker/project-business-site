import React from "react";
import CourseCard from "./CourseCard";
import "./styling/CoursesSection.css";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="courses-title">Courses & Rituals</h2>
      <div className="courses-grid">
        <CourseCard
          image="./images/image-course-1.jpg"
          title="Awaken the Inner Moon"
          description="A course on aligning with lunar rhythms and your own emotional cycle"
        />
        <CourseCard
          image="./images/image-course-2.jpg"
          title="Sacred Morning Rituals"
          description="Begin your day with grounding practices for clarity and joy."
        />
        <CourseCard
          image="./images/image-course-3.jpg"
          title="Root & Rise"
          description="A 7-day journey to reconnect with your body and inner essence."
        />
      </div>
    </section>
  );
};

export default CoursesSection;
