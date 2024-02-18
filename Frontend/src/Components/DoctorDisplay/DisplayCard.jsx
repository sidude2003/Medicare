import React from "react";

export const DisplayCard = ({ doctor }) => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="min-w-[10rem] ">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-irisBlueColor to-yellow-300 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top">
              <div className="space-y-80 w-full text-center">
                <h1 className="text-slate-800 ">{doctor.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
