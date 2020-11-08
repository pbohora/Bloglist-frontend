import React from "react";
import boxStyle from "./boxContainer.module.css";

const BoxContainer = ({ children }) => {
  return <div className={boxStyle.boxContainer}>{children}</div>;
};

export default BoxContainer;
