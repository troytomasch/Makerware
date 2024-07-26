import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/pic1.png";

// Component for the home page
const Home = () => {
  useEffect(() => {
    document.title = "Makerwear";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row">
          <div className="max-w-xl m-8">
            <p className="text-6xl my-6 font-bold">
              Discover Unique Style at Maker Wear
            </p>
            <p className="text-3xl my-6">Explore our exclusive collection</p>
            <p className="text-xl my-12">
              At Maker Wear, we are passionate about creating a unique fashion
              experience. Our carefully curated collection showcases the latest
              trends and timeless classics, allowing you to express your
              individuality through style. We take pride in offering
              high-quality clothing that is both fashionable and comfortable.
              Our team is dedicated to providing personalized service to help
              you find the perfect pieces for any occasion. Whether you're
              looking for everyday essentials or statement pieces, we have
              something for everyone. Embrace your style and elevate your
              wardrobe with Maker Wear.
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
    </div>
  );
};

export default Home;
