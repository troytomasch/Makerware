import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// Component for the navigation bar
const Header = ({ selected }) => {
  let homeColor = null;
  let productsColor = null;
  let aboutColor = null;
  let contactColor = null;

  if (selected === "home") {
    homeColor = "text-green-400";
  } else if (selected === "products") {
    productsColor = "text-green-400";
  } else if (selected === "about") {
    aboutColor = "text-green-400";
  } else if (selected === "contact") {
    contactColor = "text-green-400";
  }

  // Added CSS for hovering over the links
  const linkTextCSS =
    "hover:text-green-200 transition transform hover:-translate-y-0.5 text-xl";

  // CSS for each link
  const linkCSS = "sm:m-5 m-1.5";

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={logo}></img>

      <div className="flex h-16 flex-row items-center justify-center md:w-full">
        <Link className={linkCSS} to="/">
          <p className={`${linkTextCSS} ${homeColor}`}>Home</p>
        </Link>

        <Link className={linkCSS} to="/products">
          <p className={`${linkTextCSS} ${productsColor}`}>Products</p>
        </Link>

        <Link className={linkCSS} to="/about">
          <p className={`${linkTextCSS} ${aboutColor}`}>About</p>
        </Link>

        <Link className={linkCSS} to="/contact">
          <p className={`${linkTextCSS} ${contactColor}`}>Contact</p>
        </Link>
      </div>

      <div className="h-0 border-2 w-full rounded-sm m-2 border-green-100"></div>
    </div>
  );
};

export default Header;
