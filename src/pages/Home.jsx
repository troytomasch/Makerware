import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/pic1.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Component for the home page
const Home = () => {
  useEffect(() => {
    document.title = "Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header selected={"home"} />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row">
          <div className="max-w-xl m-8">
            <p className="text-6xl mb-6 font-bold">
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
            <Link to={"/products"}>
              <button className="border-4 rounded-lg p-4 text-lg border-green-200 text-green-700">
                Explore our collection
              </button>
            </Link>
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

export default Home;
