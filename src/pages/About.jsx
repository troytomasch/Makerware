import React, { useEffect } from "react";
import Header from "../components/Header";

// Component for the home page
const About = () => {
  useEffect(() => {
    document.title = "Makerwear";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className="flex items-center justify-center">
        <h1>About</h1>
      </div>
    </div>
  );
};

export default About;
