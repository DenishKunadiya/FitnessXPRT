import React, { Component } from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, ...otherprops }) => (
  <button className="custom-button">{children}</button>
);

export default CustomButton;
