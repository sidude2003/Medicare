import React from "react";
import logo from "../../assets/Images/logo.png";

const Footer = () => {
  return (
    <div className="hero__section">
      <footer class="bg-white rounded-lg shadow dark:bg-irisBlueColor m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} class="h-8" alt="" />
              <span class="self-center text-white"></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a href="/home" class="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="/doctor" class="hover:underline me-4 md:me-6">
                  Find a Doctor
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:underline me-4 md:me-6">
                  Contacts
                </a>
              </li>
              <li>
                <a href="/services" class="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-white sm:mx-auto lg:my-8" />
          <span class="block text-sm text-white sm:text-center">
            © 2023{" "}
            <a href="/" class="hover:underline">
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
