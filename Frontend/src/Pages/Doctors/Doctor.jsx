import React from "react";
import DisplayList from "../../Components/DoctorDisplay/DisplayList";

const Doctor = () => {
  return (
    <div>
      <div className="hero__section flex justify-between">
        <DisplayList />
      </div>
    </div>
  );
};

export default Doctor;
