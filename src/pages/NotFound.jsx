import React, { useEffect } from "react";
import Header from "../components/Header";

// Not found page 404
const NotFound = () => {
  useEffect(() => {
    document.title = "Not found | Troy Tomasch";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className={"m-5 flex gap-7 flex-col"}>
        <h1>Sorry this page was not found</h1>
      </div>
    </div>
  );
};

export default NotFound;
