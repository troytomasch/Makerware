import React, { useEffect } from "react";
import Header from "../components/Header";

import {
  clickHereToPurchaseString,
  makerpantsFeature,
  makerpantsFeatureString,
} from "../strings";
import image from "../assets/pic9.jpg";
import Footer from "../components/Footer";

import Gallery from "../components/Gallery";

// Component for the products page
const Products = () => {
  useEffect(() => {
    document.title = "Products | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header selected={"products"} />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row flex-wrap">
          <div className="max-w-xl m-8">
            <p className="text-6xl mb-6 font-bold">Maker Pants</p>
            <p className="text-xl my-4">{makerpantsFeatureString}</p>
            <div className="flex flex-row items-center align-middle justify-center flex-wrap">
              <ul className="list-disc mx-8">
                {makerpantsFeature.map((bullet) => (
                  <li className="text-lg">{bullet}</li>
                ))}
              </ul>
              <div className="my-8 flex items-center justify-center align-middle border-4 rounded-lg p-4 text-xl border-makerwear-bright text-white h-20 bg-makerwear-blue">
                <a
                  className=""
                  href="https://buy.stripe.com/bIYcOYayVaXZ7m03cd"
                  target="_blank"
                >
                  {clickHereToPurchaseString}
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-md">
            <img
              src={image}
              className="border-solid border-white rounded-md border-2 m-8 h-auto w-auto"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold p-5">Gallery</p>
        <Gallery />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
