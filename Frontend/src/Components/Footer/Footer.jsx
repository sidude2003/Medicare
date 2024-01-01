import React from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hero__section">
      <footer className="bg-white rounded-lg shadow dark:bg-irisBlueColor m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="" />
              <span className="self-center text-white"></span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <Link to="/home" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctor" className="hover:underline me-4 md:me-6">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline me-4 md:me-6">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Medicare™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
