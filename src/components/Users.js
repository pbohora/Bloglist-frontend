import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import BoxContainer from "./BoxContainer";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "center",
    paddingTop: "100px",
    width: "100%",
  },
  userBox: {
    [theme.breakpoints.down("sm")]: {
      margin: "0px 16px",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      margin: "0px 16px",
      width: "100%",
    },

    [theme.breakpoints.up("lg")]: {
      flexBasis: "30%",
      margin: "0px 16px",
      width: "100%",
    },
  },
  userContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "400px",
  },
  avatar: {
    height: "200px",
    width: "200px",
    fontSize: "42px",
    color: "white",
    marginBottom: "32px",
    backgroundColor: "#05a0e7",
  },
  content: {
    fontSize: "32px",
    marginBottom: "8px",
    fontWeight: "bolder",
    cursor: "pointer",
    color: "#05a0e7",
  },
}));

const AvatarCreater = ({ username }) => {
  const classes = useStyles();
  var matches = username.match(/\b(\w)/g);
  var avatar = matches.join("");

  return <Avatar className={classes.avatar}>{avatar}</Avatar>;
};

const Users = () => {
  const classes = useStyles();

  const users = useSelector(({ users }) => {
    return users;
  });

  return (
    <div className={classes.container}>
      {users.map((user) => (
        <div key={user.id} className={classes.userBox}>
          <BoxContainer>
            <div className={classes.userContainer}>
              <AvatarCreater username={user.name} />
              <div className={classes.content}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </div>
              <p>Number of blogs: {user.blogs.length}</p>
            </div>
          </BoxContainer>
        </div>
      ))}
    </div>
  );
};

export default Users;
