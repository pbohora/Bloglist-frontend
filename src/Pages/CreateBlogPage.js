import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import BlogpostForm from "../components/BlogpostForm";
import Togglable from "../components/Togglable";
import Subsection from "../components/Subsection/Subsection";

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
        <Togglable buttonLabel="Add Blog">
          <BlogpostForm
            onBlogSubmit={handleBlogSubmit}
            handleChange={handleChange}
            newBlog={newBlog}
          />
        </Togglable>
      </Section>
      <Section>
        <Subsection />
      </Section>
    </Layout>
  );
};

export default CreateBlogPage;
