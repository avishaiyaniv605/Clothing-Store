import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleButton, ...restOfProps }) => {
  const className = `${isGoogleButton ? "google" : ""} custom-button`;
  return (
    <button className={className} {...restOfProps}>
      {children}
    </button>
  );
};

export default CustomButton;
