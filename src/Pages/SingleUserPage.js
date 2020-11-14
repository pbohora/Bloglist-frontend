import React from "react";
import Layout from "../components/Layout";
import BoxContainer from "../components/BoxContainer";
import Blog from "../components/BLogs/Blog";
import Section from "../components/Section";
import { makeStyles } from "@material-ui/core/styles";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  userHaeder: {
    padding: "16px 32px 2px 32px",
    backgroundColor: "#05a0e7",
    color: "white",
    marginTop: "100px",
  },
  blogContainer: {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  singleBlog: {
    flexBasis: "45%",
    margin: "4px 24px",
  },
}));

const SingleUserPage = ({ user, handleLogOut }) => {
  const classes = useStyles();

  const users = useSelector(({ users }) => {
    return users;
  });
  const id = useParams().id;
  const selectedUser = users.find((user) => user.id === id);

  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      {selectedUser && (
        <>
          <div className={classes.userHaeder}>
            <h2>{selectedUser.name}</h2>
          </div>
          <BoxContainer>
            <div>
              <h2>Blogs</h2>
              <div className={classes.blogContainer}>
                {selectedUser.blogs.map((blog) => (
                  // <li key={blog.id}>{blog.title}</li>
                  <div key={blog.id} className={classes.singleBlog}>
                    <Blog blog={blog} user={user} />
                  </div>
                ))}
              </div>
            </div>
          </BoxContainer>
        </>
      )}
    </Layout>
  );
};

export default SingleUserPage;
