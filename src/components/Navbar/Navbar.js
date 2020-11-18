import React, { useState } from "react";
import { IconButton, Hidden } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SideDrawer from "./SideDrawer";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/logo.png";
import NavStyle from "./Navbar.module.css";

const NavBar = ({ user, handleLogOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileLogout = () => {
    handleLogOut();
    setAnchorEl(null);
  };

  const profileMenu = () => (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>My Account</MenuItem>

      <MenuItem onClick={handleProfileLogout}>Logout</MenuItem>
    </Menu>
  );

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
              onClick={handleClick}
            >
              {user.name}
              <ArrowDropDownIcon />
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
      {profileMenu()}
    </nav>
  );
};

export default NavBar;
