import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";

const useStyles = makeStyles({
  navbarActive: {
    color: "black",
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
  },

  navItem: {
    fontSize: "24px",
    padding: "18px 32px",
    fontWeight: "bold",
  },

  list: {
    width: "100%",
    padding: "60px 30px",
  },

  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

const SideDrawer = ({ user, handleLogOut }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        <div className={classes.navLinks}>
          {user && <h3>Welcome! {user.name}</h3>}
          <NavLink
            className={classes.navItem}
            as={Link}
            exact
            to="/"
            activeClassName={classes.navbarActive}
          >
            Home
          </NavLink>

          <NavLink
            className={classes.navItem}
            to="/blogs"
            exact
            activeClassName={classes.navbarActive}
          >
            Blogs
          </NavLink>

          <NavLink
            className={classes.navItem}
            to="/users"
            exact
            activeClassName={classes.navbarActive}
          >
            Users
          </NavLink>

          {user && (
            <NavLink
              className={classes.navItem}
              to="/addblog"
              exact
              activeClassName={classes.navbarActive}
            >
              Create
            </NavLink>
          )}

          {user ? (
            <a
              className={classes.navItem}
              exact
              activeClassName={classes.navbarActive}
              onClick={handleLogOut}
            >
              Log out
            </a>
          ) : (
            <NavLink
              className={classes.navItem}
              to="/login"
              exact
              activeClassName={classes.navbarActive}
            >
              Login
            </NavLink>
          )}
        </div>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu
          fontSize="large"
          style={{ color: `#05a0e7`, paddingRight: "32px" }}
        />
      </IconButton>

      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
