import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "rgb(65, 63, 63)",
    color: "white",
    marginTop: "auto",
    padding: "16px 120px",
    height: "8rem",
    display: "flex",
    flexDirection: "column",
  },
  footerContent: {
    paddingTop: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    margin: "10px 0 0 6px",
    paddingBottom: "12px",
    borderBottom: "1px solid white",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <h2 className={classes.header}>My Blogs</h2>
      <div className={classes.footerContent}>
        <p>
          Copyright @<span>My Blogs</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
