import React from "react";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import Doctors from "../Pages/Doctors/Doctor";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";
import Contacts from "../Pages/Contacts";

import { Routes, Route } from "react-router-dom";

const Rou = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Rou;
