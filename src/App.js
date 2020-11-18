import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { initializeBlogs } from "./reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./services/blog";
import { removeUser, setUser, loginUser } from "./reducers/userReducer";
import { allUsers } from "./reducers/usersReducer";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import BlogPage from "./Pages/BlogsPage";
import CreateBlogPage from "./Pages/CreateBlogPage";
import UsersPage from "./Pages/UsersPage";
import SingleUserPage from "./Pages/SingleUserPage";
import SingleBlogPage from "./Pages/SingleBlogPage";

const App = () => {
  const [sucessMessage, setSucessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const userData = useSelector(({ user }) => {
    return user;
  });

  console.log(userData);

  const user = userData.user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeBlogs());
  }, []);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedBLogUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      dispatch(setUser(user));
      setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              handleLogOut={handleLogout}
              user={user}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
        <Route
          exact
          path="/blogs"
          render={() => (
            <BlogPage
              handleLogOut={handleLogout}
              user={user}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => <UsersPage handleLogOut={handleLogout} user={user} />}
        />
        <Route
          path="/users/:id"
          render={() => (
            <SingleUserPage handleLogOut={handleLogout} user={user} />
          )}
        />
        <Route
          path="/blogs/:id"
          render={() => (
            <SingleBlogPage handleLogOut={handleLogout} user={user} />
          )}
        />
        <Route
          path="/login"
          render={() => (
            <LoginPage
              user={user}
              handleLogOut={handleLogout}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
        <Route
          path="/signup"
          render={() => (
            <SignupPage
              user={user}
              handleLogOut={handleLogout}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
        <Route
          path="/addblog"
          render={() => (
            <CreateBlogPage
              user={user}
              handleLogOut={handleLogout}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
