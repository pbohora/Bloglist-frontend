import React from "react";
import Layout from "../components/Layout";
import BoxContainer from "../components/BoxContainer";
import Blog from "../components/BLogs/Blog";
import Section from "../components/Section/Section";
import Users from "../components/Users";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleUserPage = ({ user, handleLogOut }) => {
  const users = useSelector(({ users }) => {
    return users;
  });
  const id = useParams().id;
  const selectedUser = users.find((user) => user.id === id);
  console.log(selectedUser);
  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      {selectedUser && (
        <div style={{ paddingTop: "120px" }}>
          <div
            style={{
              padding: "16px 32px 2px 32px",
              backgroundColor: "#05a0e7",
              color: "white",
            }}
          >
            <h2>{selectedUser.name}</h2>
          </div>
          <BoxContainer>
            <div>
              <h2>Blogs</h2>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {selectedUser.blogs.map((blog) => (
                  // <li key={blog.id}>{blog.title}</li>
                  <div
                    key={blog.id}
                    style={{ flexBasis: "45%", margin: "4px 24px" }}
                  >
                    <Blog blog={blog} user={user} />
                  </div>
                ))}
              </div>
            </div>
          </BoxContainer>
        </div>
      )}
    </Layout>
  );
};

export default SingleUserPage;
