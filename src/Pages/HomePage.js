import React from "react";
import { useHistory } from "react-router-dom";

import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import blogImage from "../Assests/workplace.png";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  signin: {
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
    <div
      style={{
        maxHeight: "100vh",
      }}
    >
      <Layout
        user={user}
        handleLogOut={handleLogOut}
        sucessMessage={sucessMessage}
        errorMessage={errorMessage}
      >
        <Section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div>
              <h2>
                <span style={{ color: "#05a0e7" }}>Create</span> or{" "}
                <span style={{ color: "#05a0e7" }}>Read</span> your favorite
                blog anywhare, anytime.
              </h2>
              <p style={{ fontSize: "18px" }}>
                Create a unique and beautiful blog. It’s easy and free. Save the
                moments that matter.{" "}
                <span style={{ color: "#05a0e7" }}>My Blogs</span> lets you
                safely store or explore thousands of blog posts for free.
              </p>
              <div style={{ marginTop: "32px" }}>
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

            <img src={blogImage} alt="img" height="55%" width="55%" />
          </div>
        </Section>
      </Layout>
    </div>
  );
};

export default HomePage;
