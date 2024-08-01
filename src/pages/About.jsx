import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/prom.png";
import Footer from "../components/Footer";

// Component for the about page
const About = () => {
  useEffect(() => {
    document.title = "About | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row">
          <div className="max-w-xl m-8">
            <p className="text-6xl mb-6 font-bold">Jenna Tomasch</p>
            <p className="text-xl my-12">
              Jenna Tomasch is the creator of Maker Wear. She is a senior
              Fashion Design and Product innovation major at the University of
              Delaware where she focuses on sustainability, functional design,
              and entrepreneurship. She has been a maker her whole life, growing
              up she always loved creating things. Now she works at a makerspace
              on UD's campus where she works with 3D printers, laser cutters,
              woodshop, and sewing. She has been sewing for 7 years and has
              created anything from Maker Pants to her senior prom dress
              (pictured).
            </p>
          </div>
          <div className="max-w-xl">
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
