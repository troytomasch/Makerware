import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Not found page 404
const NotFound = () => {
  useEffect(() => {
    document.title = "Not found | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className={"m-5 flex gap-7 flex-row justify-center"}>
        <h1 className="text-3xl my-24">Sorry! Nothing found here!</h1>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
