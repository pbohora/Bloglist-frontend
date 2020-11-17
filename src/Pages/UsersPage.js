import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Users from "../components/Users";

const UsersPage = ({ user, handleLogOut }) => {
  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      <Section>
        <Users />
      </Section>
    </Layout>
  );
};

export default UsersPage;
