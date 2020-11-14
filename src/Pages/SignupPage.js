import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import SignupForm from "../components/SignupForm";
import BoxContainer from "../components/BoxContainer";
import AuthContainer from "../components/AuthContainer";

const SignupPage = ({ user, sucessMessage, errorMessage, handleLogOut }) => {
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
      <Section>
        <BoxContainer>
          <AuthContainer
            btnText="Login"
            onSubmit={onSubmit}
            text="Already have an account yet?"
          >
            <SignupForm />
          </AuthContainer>
        </BoxContainer>
      </Section>
    </Layout>
  );
};

export default SignupPage;
