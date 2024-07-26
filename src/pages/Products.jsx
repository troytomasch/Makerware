import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/pic1.png";

// Component for the home page
const Products = () => {
  useEffect(() => {
    document.title = "Products | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row">
          <div className="max-w-xl m-8">
            <p className="text-6xl mb-6 font-bold">Maker Pants</p>
            <p className="text-xl my-12">
              The Maker Pants are a pair of one-size-fits-most adjustable
              overalls that can be worn overtop of clothing and put on without
              taking off your shoes. They are meant to protect people and their
              clothing in messy or unsafe situations. Maker Pants are great for
              painting, wheel throwing, woodworking, gardening, and more! They
              come in short, medium, and tall height variations. They are high
              quality and hand made in the US. Maker Pants feature:
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

export default Products;
