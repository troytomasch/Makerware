import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/pic1.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  homePageString,
  homePageTitleString,
  homePageSubtitleString,
  homePageButtonString,
} from "../strings";

// Component for the home page
const Home = () => {
  useEffect(() => {
    document.title = "Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header selected={"home"} />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row flex-wrap">
          <div className="max-w-xl m-8">
            <p className="text-6xl mb-6 font-bold">{homePageTitleString}</p>
            <p className="text-3xl my-6">{homePageSubtitleString}</p>
            <p className="text-xl my-12">{homePageString}</p>
            <Link to={"/products"}>
              <button className="border-4 rounded-lg p-4 text-lg border-makerwear-blue text-makerwear-blue">
                {homePageButtonString}
              </button>
            </Link>
          </div>
          <div className="max-w-md">
            <img
              src={image}
              className="border-solid border-white rounded-md border-2 m-8 w-auto h-auto"
            ></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
