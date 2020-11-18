import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import BlogList from "../components/BLogs/BlogList";
import ScrollableTab from "../components/ScrollableTab";
import blogImage from "../Assests/learn.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutBotton: {
    alignSelf: "center",
    padding: "10px 40px",
    background: "#fafafa",
    border: "1px solid #05a0e7",
    color: "#05a0e7",
    "&:hover": {
      background: "#05a0e7",
      color: "white",
    },
  },
  sectionContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "60px 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      padding: "60px 0px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "32px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    },
  },

  img: {
    [theme.breakpoints.up("md")]: {
      height: "40%",
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "70%",
      width: "80%",
    },
  },

  coloredSpan: {
    color: "#05a0e7",
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
    paddingLeft: "100px",
  },
}));

const BlogPage = ({
  user,
  handleLike,
  handleRemove,
  sucessMessage,
  errorMessage,
  handleLogOut,

  handleClose,
}) => {
  const classes = useStyles();

  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <div className={classes.sectionContainer}>
        <Hidden smDown>
          <img src={blogImage} className={classes.img} alt="img" />
        </Hidden>
        <div className={classes.textContainer}>
          <h2>
            <span className={classes.coloredSpan}>Welcome to the Blogs.</span>{" "}
            Read your favorite blog.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
          <Button
            size="large"
            variant="contained"
            type="submit"
            className={classes.aboutBotton}
          >
            About Us
          </Button>
        </div>
      </div>
      <ScrollableTab />
      <Section>
        <BlogList
          handleLike={handleLike}
          handleRemove={handleRemove}
          user={user}
          handleClose={handleClose}
        />
      </Section>
    </Layout>
  );
};

export default BlogPage;
