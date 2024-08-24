import React, { useEffect } from "react";
import Header from "../components/Header";

import image from "../assets/pic12.jpg";
import Footer from "../components/Footer";
import { contactMeString, emailString, getInTouchTitle } from "../strings";

// Component for the contact page
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Maker Wear";
  }, []);

  return (
    <div className="m-10">
      <Header selected={"contact"} />

      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center flex-wrap">
          <div className="flex flex-col items-center max-w-xl sm:max-w-screen-md m-2">
            <p className="text-6xl mb-4 font-bold">{getInTouchTitle}</p>
            <p className="text-xl my-4">
              {contactMeString}{" "}
              <a
                href={`mailto: ${emailString}`}
                className="font-bold text-makerwear-blue"
              >
                {emailString}
              </a>
              .
            </p>
          </div>
          <div className="max-w-md">
            <img
              src={image}
              className="border-solid border-white rounded-md border-2 h-auto w-auto"
            ></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
