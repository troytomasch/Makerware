import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/prom.png";
import Footer from "../components/Footer";
import { aboutString, aboutTitle } from "../strings";

// Component for the about page
const About = () => {
  useEffect(() => {
    document.title = "About | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header selected={"about"} />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row flex-wrap">
          <div className="max-w-xl m-8">
            <p className="text-6xl mb-6 font-bold">{aboutTitle}</p>
            <p className="text-xl my-12">{aboutString}</p>
          </div>
          <div className="max-w-md">
            <img
              src={image}
              className="border-solid border-white rounded-md border-2 m-8 h-auto w-auto"
            ></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
