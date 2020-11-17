import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Notification from "../Notification";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
  },
  layoutContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: " 50px 16px",
      position: "relative",
      marginBottom: "2rem",
    },
    [theme.breakpoints.up("sm")]: {
      padding: " 0px 60px",
      position: "relative",
      marginBottom: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: " 0px 60px",
      position: "relative",
      marginBottom: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: " 0px 140px",
      position: "relative",
      marginBottom: "2rem",
    },
  },
}));

const Layout = ({
  user,
  handleLogOut,
  //   sucessMessage,
  //   errorMessage,
  children,
}) => {
  const classes = useStyles();
  const blogsData = useSelector(({ blogs }) => {
    return blogs;
  });

  const userData = useSelector(({ user }) => {
    return user;
  });

  const register = useSelector(({ register }) => {
    return register;
  });

  return (
    <div className={classes.root}>
      <Navbar user={user} handleLogOut={handleLogOut} />

      <Notification message={blogsData.sucess} severity="success" />
      <Notification message={blogsData.error} severity="error" />
      <Notification message={userData.sucess} severity="success" />
      <Notification message={userData.error} severity="error" />
      <Notification message={register.sucess} severity="success" />
      <Notification message={register.error} severity="error" />
      <div className={classes.layoutContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
