import React from "react";

const BtnPrimary = ({ children, width, height, fontSize }) => {
  return (
    <div
      className={`${width} ${height} rounded-full bg-primary-color text-white ${fontSize} font-semibold flex items-center justify-center cursor-pointer transition tracking-wide`}
    >
      {children}
    </div>
  );
};

export default BtnPrimary;
