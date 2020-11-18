import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Section = ({ children }) => {
  const classes = useStyles();

  return <section className={classes.sectionContainer}>{children}</section>;
};

export default Section;
