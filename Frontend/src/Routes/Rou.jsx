import React from "react";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
import Doctors from "../Pages/Doctors/Doctor";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";
import Contacts from "../Pages/Contacts";
import Appoint from "../Pages/Appoint";
import { AppntDisplay } from "../Pages/AppntDisplay";
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
      <Route path="/appointments" element={<Appoint />} />
      <Route path="/appointments-display" element={<AppntDisplay />} />
    </Routes>
  );
};

export default Rou;
