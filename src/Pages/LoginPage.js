import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import LoginForm from "../components/LoginForm";
import BoxContainer from "../components/BoxContainer";
import AuthContainer from "../components/AuthContainer";

const LoginPage = ({ user, sucessMessage, errorMessage, handleLogOut }) => {
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
      <div style={{ paddingTop: "110px", minHeight: "73vh" }}>
        <Section>
          <BoxContainer>
            <AuthContainer
              btnText="Sign up"
              onSubmit={onSubmit}
              text="Don't have an account yet?"
            >
              <LoginForm />
            </AuthContainer>
          </BoxContainer>
        </Section>
      </div>
    </Layout>
  );
};

export default LoginPage;
