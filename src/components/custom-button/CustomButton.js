import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleButton,
  inverted,
  ...restOfProps
}) => {
  const className = `${inverted ? "inverted" : ""} ${
    isGoogleButton ? "google" : ""
  } custom-button`;
  return (
    <button className={className} {...restOfProps}>
      {children}
    </button>
  );
};

export default CustomButton;
