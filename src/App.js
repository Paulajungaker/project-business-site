import "./index.css";
import React from "react";
import AppRoutes from "AppRoutes";
import AboutSection from "components/AboutSection";
import CoursesSection from "components/CoursesSection";
import IncenseSection from "components/IncenseSection";

export const App = () => {
  return (
    <div>
      <AppRoutes />
      <AboutSection />
      <CoursesSection />
      <IncenseSection />
    </div>
  );
};
