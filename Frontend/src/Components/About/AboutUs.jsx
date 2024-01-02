import React from "react";
import aboutImg from "../../assets/Images/about.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start max-w-6xl mx-auto py-8 px-4">
      <div className="lg:w-1/3 mr-8">
        <img
          src={aboutImg}
          alt="About Photo"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="lg:w-2/3">
        <h1 className="heading text-center text-4xl lg:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className=" text__para text-left justify-center text-lg leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text__para text-left text-lg leading-relaxed">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
