import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard";
import { BASE_URL } from "../../../Configuration/config";

export const DisplayList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/appoint/doctors`)
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <DisplayCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DisplayList;
