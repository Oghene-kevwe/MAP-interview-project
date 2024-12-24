import React from "react";

export const ResponseStepsHeader = ({ header, subtitle }) => {
  return (
    <div className=" mb-6">
      <p className=" text-[#1A1A21] text-xl  md:text-2xl font-bold">{header}</p>
      <p className=" text-[#98A2B3]">{subtitle}</p>
    </div>
  );
};
