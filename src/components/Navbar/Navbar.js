import React, { useState } from "react";
import { IconButton, Hidden } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/logo.png";
import NavStyle from "./Navbar.module.css";

const NavBar = ({ user, handleLogOut }) => {
  return (
    <nav className={NavStyle.nav}>
      <NavLink as={Link} exact to="/" className={NavStyle.home}>
        <img className={NavStyle.logo} src={Logo} alt="img" />
      </NavLink>
      <Hidden smDown>
        <div className={NavStyle.navLinks}>
          <NavLink
            as={Link}
            exact
            to="/"
            activeClassName={NavStyle.navbarActive}
          >
            Home
          </NavLink>

          <NavLink to="/blogs" exact activeClassName={NavStyle.navbarActive}>
            Blogs
          </NavLink>

          <NavLink to="/users" exact activeClassName={NavStyle.navbarActive}>
            Users
          </NavLink>

          {user && (
            <NavLink
              to="/addblog"
              exact
              activeClassName={NavStyle.navbarActive}
            >
              Create
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
            <NavLink to="/login" exact activeClassName={NavStyle.navbarActive}>
              Login
            </NavLink>
          )}
        </div>
      </Hidden>
      <Hidden mdUp>
        <SideDrawer user={user} handleLogOut={handleLogOut} />
      </Hidden>
    </nav>
  );
};

export default NavBar;
