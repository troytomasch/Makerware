import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/pic12.png";
import Footer from "../components/Footer";

// Component for the contact page
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-row">
          <div className="max-w-xl sm:max-w-screen-md m-8">
            <p className="text-6xl mb-6 font-bold">Get in touch</p>
            <p className="text-xl my-4">
              Reach out to me through my email: jtomasch@udel.edu
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

      <Footer />
    </div>
  );
};

export default Contact;
