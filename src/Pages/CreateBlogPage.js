import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import BlogpostForm from "../components/BlogpostForm";
import Togglable from "../components/Togglable";
import blogImage from "../Assests/blogging.png";
import BoxContainer from "../components/BoxContainer";
import Grid from "@material-ui/core/Grid";

const CreateBlogPage = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  handleBlogSubmit,
  handleChange,
  newBlog,
}) => {
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section>
        <div
          style={{
            position: " relative",
            textAlign: "center",
            paddingTop: "150px",
          }}
        >
          <img src={blogImage} alt="img" height="100%" width="100%" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: " 100%",
            }}
          >
            {/* <Togglable buttonLabel="Add Blog"> */}
            <BlogpostForm
              onBlogSubmit={handleBlogSubmit}
              handleChange={handleChange}
              newBlog={newBlog}
            />
            {/* </Togglable> */}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default CreateBlogPage;
