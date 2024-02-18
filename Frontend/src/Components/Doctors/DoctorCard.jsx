import React from "react";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital,
  } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="" />
      </div>
      <div className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {name}
      </div>
      <p className="text-[12px] bg-irisBlueColor py-0.5 px-1.5 rounded-8 inline-block">
        {specialty}
      </p>
    </div>
  );
};

export default DoctorCard;
