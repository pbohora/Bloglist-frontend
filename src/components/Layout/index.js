import React from "react";

import { useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar";
import Notification from "../Notification";
import LayoutStyle from "./layout.module.css";

const Layout = ({
  user,
  handleLogOut,
  //   sucessMessage,
  //   errorMessage,
  children,
}) => {
  const blogsData = useSelector(({ blogs }) => {
    return blogs;
  });

  const userData = useSelector(({ user }) => {
    return user;
  });

  const register = useSelector(({ register }) => {
    return register;
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
      <Notification message={userData.sucess} severity="success" />
      <Notification message={userData.error} severity="error" />
      <Notification message={register.sucess} severity="success" />
      <Notification message={register.error} severity="error" />
      <div className={LayoutStyle.layoutContainer}>{children}</div>
    </div>
  );
};

export default Layout;
