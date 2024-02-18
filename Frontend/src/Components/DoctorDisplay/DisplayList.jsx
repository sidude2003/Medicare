import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard";
import { BASE_URL } from "../../../Configuration/config";

export const DisplayList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/doctor/find`)
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);
  return (
    <div className="doctor-list flex justify-center gap-[2rem] flex-row flex-wrap w-full p-20 min-h-[80vh]">
      {doctors.map((doctor) => (
        <DisplayCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DisplayList;
