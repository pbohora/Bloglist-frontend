import React from "react";

import { useSelector } from "react-redux";

import Navbar from "./Navbar/Navbar";
import Notification from "./Notification";
import backgroundImage from "../Assests/ring.png";

const Layout = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  children,
}) => {
  const blogsData = useSelector(({ blogs }) => {
    return blogs;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <Navbar user={user} handleLogOut={handleLogOut} />

      <Notification message={blogsData.sucess} severity="success" />
      <Notification message={blogsData.error} severity="error" />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
