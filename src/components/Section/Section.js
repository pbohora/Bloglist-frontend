import React from "react";
import classNames from "classnames";

import SectionStyles from "./Section.module.css";

const Section = ({ background, children }) => {
  const sectionClasses = classNames({
    [`${SectionStyles.container}`]: true,
    [`${SectionStyles.background}`]: background,
  });
  return <section className={sectionClasses}>{children}</section>;
};

export default Section;
