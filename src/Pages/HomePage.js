import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import blogImage from "../Assests/workplace.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  signin: {
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px",
      marginBottom: "16px",
    },
    alignSelf: "center",
    width: "180px",
    padding: "10px 40px",
    marginRight: "16px",
    background: " #05a0e7",
    color: "white",
    "&:hover": {
      background: "#0479af",
    },
  },
  blog: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "16px",
    },
    alignSelf: "center",
    width: "180px",
    padding: "10px 40px",
    marginLeft: "16px",
    background: "#fafafa",
    border: "1px solid #1a1a1a",
    color: "#1a1a1a",
    "&:hover": {
      background: "#1a1a1a",
      color: "white",
    },
  },
  buttonCollection: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      flexDirection: "column",
    },
    marginTop: "32px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "85vh",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
  },
  coloredSpan: {
    color: "#05a0e7",
  },
}));

const HomePage = ({ user, handleLogOut, sucessMessage, errorMessage }) => {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (event) => {
    history.push("/signup");
  };

  const handleClick = () => {
    history.push("/blogs");
  };

  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section>
        <div className={classes.sectionContainer}>
          <div>
            <h2>
              <span className={classes.coloredSpan}>Create</span> or{" "}
              <span className={classes.coloredSpan}>Read</span> your favorite
              blog anywhare, anytime.
            </h2>
            <p>
              Create a unique and beautiful blog. It’s easy and free. Save the
              moments that matter.{" "}
              <span className={classes.coloredSpan}>My Blogs</span> lets you
              safely store or explore thousands of blog posts for free.
            </p>
            <div className={classes.buttonCollection}>
              {!user && (
                <Button
                  onClick={onSubmit}
                  size="large"
                  variant="contained"
                  type="submit"
                  className={classes.signin}
                >
                  Sign up
                </Button>
              )}
              <Button
                onClick={handleClick}
                size="large"
                variant="contained"
                type="submit"
                className={classes.blog}
              >
                Blogs
              </Button>
            </div>
          </div>
          <Hidden smDown>
            <img src={blogImage} alt="img" height="55%" width="55%" />
          </Hidden>
        </div>
      </Section>
    </Layout>
  );
};

export default HomePage;
