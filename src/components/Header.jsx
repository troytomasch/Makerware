import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// Component for the navigation bar
const Header = ({ selected }) => {
  let homeColor = null;
  let resumeColor = null;
  let projectsColor = null;

  if (selected === "Home") {
    homeColor = "text-white";
  } else if (selected === "Resume") {
    resumeColor = "text-white";
  } else if (selected === "Projects") {
    projectsColor = "text-white";
  }

  // Added CSS for hovering over the links
  const linkTextCSS =
    "hover:text-green-300 transition transform hover:-translate-y-0.5 text-xl";

  // CSS for each link
  const linkCSS = "sm:m-5 m-1.5";

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={logo}></img>

      <div className="flex h-16 flex-row items-center justify-center md:w-full">
        <Link className={linkCSS} to="/">
          <p className={linkTextCSS}>Home</p>
        </Link>

        <Link className={linkCSS} to="/products">
          <p className={linkTextCSS}>Products</p>
        </Link>

        <Link className={linkCSS} to="/about">
          <p className={linkTextCSS}>About</p>
        </Link>

        <Link className={linkCSS} to="/contact">
          <p className={linkTextCSS}>Contact</p>
        </Link>
      </div>

      <div className="h-0 border-2 w-full rounded-sm m-2 border-green-100"></div>
    </div>
  );
};

export default Header;
