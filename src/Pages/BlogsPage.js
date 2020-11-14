import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import BlogList from "../components/BLogs/BlogList";
import ScrollableTab from "../components/ScrollableTab";
import blogImage from "../Assests/learn.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
    paddingTop: "32px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },

  coloredSpan: {
    color: "#05a0e7",
  },
  textContainer: {
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
  openDialog,
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
      <Section>
        <div className={classes.sectionContainer}>
          <img src={blogImage} height="70%" width="100%" alt="img" />

          <div className={classes.textContainer}>
            <h2>
              <span className={classes.coloredSpan}>Welcome to the Blogs.</span>{" "}
              Read your favorite blog.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
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
