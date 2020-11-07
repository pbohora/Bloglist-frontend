import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/logo.png";
import NavStyle from "./Navbar.module.css";

const NavBar = ({ user, handleLogOut }) => {
  return (
    <nav className={NavStyle.nav}>
      <NavLink as={Link} exact to="/">
        <img className={NavStyle.logo} src={Logo} alt="img" />
      </NavLink>
      <div className={NavStyle.navLinks}>
        <NavLink as={Link} exact to="/" activeClassName={NavStyle.navbarActive}>
          Home
        </NavLink>

        <NavLink to="/blogs" exact activeClassName={NavStyle.navbarActive}>
          Blogs
        </NavLink>

        <NavLink to="/users" exact activeClassName={NavStyle.navbarActive}>
          Users
        </NavLink>

        {user && (
          <NavLink to="/addblog" exact activeClassName={NavStyle.navbarActive}>
            Add New Blog
          </NavLink>
        )}

        {user ? (
          <a
            className={NavStyle.loginButton}
            exact
            activeClassName={NavStyle.navbarActive}
            onClick={handleLogOut}
          >
            {user.name}
          </a>
        ) : (
          <NavLink to="/login" exact activeClassName="navbar--active">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
