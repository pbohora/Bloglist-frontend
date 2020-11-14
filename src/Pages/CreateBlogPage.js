import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Section from "../components/Section";
import BlogpostForm from "../components/BlogpostForm";
import BoxContainer from "../components/BoxContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    position: " relative",
    textAlign: "center",
    paddingTop: "100px",
  },
}));

const CreateBlogPage = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  handleBlogSubmit,
  handleChange,
  newBlog,
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
        <div className={classes.container}>
          <div className={classes.formContainer}>
            {/* <Togglable buttonLabel="Add Blog"> */}
            <BoxContainer>
              <BlogpostForm
                onBlogSubmit={handleBlogSubmit}
                handleChange={handleChange}
                newBlog={newBlog}
              />
              {/* </Togglable> */}
            </BoxContainer>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default CreateBlogPage;
