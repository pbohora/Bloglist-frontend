import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import BlogList from "../components/BLogs/BlogList";
import blogImage from "../Assests/woman.png";

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
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section sectionTitle="Blogs" background={true}>
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
