import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import LoginForm from "../components/LoginForm";
import BoxContainer from "../components/BoxContainer";
import AuthContainer from "../components/AuthContainer";

const LoginPage = ({
  user,
  userName,
  passWord,
  handleLogin,
  handleClickShowPassword,
  showPassword,
  sucessMessage,
  errorMessage,
  handleLogOut,
}) => {
  const history = useHistory();

  const onSubmit = (event) => {
    history.push("/signup");
  };
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section sectionTitle="Login Form">
        <BoxContainer>
          <AuthContainer
            btnText="Sign up"
            onSubmit={onSubmit}
            text="Don't have an account yet?"
          >
            <LoginForm
              handleLogin={handleLogin}
              userName={userName}
              passWord={passWord}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword}
            />
          </AuthContainer>
        </BoxContainer>
      </Section>
    </Layout>
  );
};

export default LoginPage;
