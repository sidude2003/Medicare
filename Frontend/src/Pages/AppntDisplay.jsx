import React from "react";
import { useState } from "react";
import { BASE_URL } from "../../Configuration/config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import DisplayList from "../Components/DoctorDisplay/DisplayList";

export const AppntDisplay = () => {
  return (
    <div className="hero__section flex align-center min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <label
        for="Toggle4"
        className="inline-flex items-center p-1 cursor-pointer justify-center items-center mt-30"
      >
        <input id="Toggle4" type="checkbox" className="hidden peer" />
        <Link to="/appointments">
          <span className="px-4 py-2 dark:bg-irisBlueColor peer-checked:dark:bg-gray-300 rounded-sm">
            Book Appointment
          </span>
        </Link>
        <Link to="/appointments-display">
          <span className="px-4 py-2 dark:bg-gray-300 peer-checked:dark:bg-irisBlueColor rounded-sm">
            Present Bookings
          </span>
        </Link>
      </label>
    </div>
  );
};
