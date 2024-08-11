import React from "react";
import pic10 from "../assets/pic10.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic11 from "../assets/pic11.png";

// Component for gallery
const Gallery = () => {
  return (
    <div className="flex flex-wrap items-center content-center justify-center">
      <img
        src={pic10}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic2}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic3}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic4}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic5}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic6}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic7}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic8}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
      <img
        src={pic11}
        className="border-solid border-white rounded-md border-2 m-8 h-auto w-80"
      />
    </div>
  );
};

export default Gallery;
