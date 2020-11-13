import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import SignupForm from "../components/SignupForm";
import BoxContainer from "../components/BoxContainer";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  signin: {
    alignSelf: "center",
    width: "180px",
    padding: "10px 40px",
    marginRight: "16px",
    background: "#4a4a48",
    color: "white",
    "&:hover": {
      background: "#383838",
    },
  },
}));

const SignupPage = ({
  user,
  handleClickShowPassword,
  showPassword,
  sucessMessage,
  errorMessage,
  handleLogOut,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (event) => {
    history.push("/login");
  };
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      {" "}
      <div style={{ paddingTop: "50px" }}>
        <Section sectionTitle="Signup Form">
          <BoxContainer>
            <div className="login-container">
              <div className="login-image-container">
                <h2>Hello, Welcome to MyBlogs!</h2>
                <p>Already have an account?</p>
                <Button
                  onClick={onSubmit}
                  size="large"
                  variant="contained"
                  type="submit"
                  className={classes.signin}
                >
                  Login
                </Button>
              </div>
              <SignupForm
                handleClickShowPassword={handleClickShowPassword}
                showPassword={showPassword}
              />
            </div>
          </BoxContainer>
        </Section>
      </div>
    </Layout>
  );
};

export default SignupPage;
