import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import BoxContainer from "./BoxContainer";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  container: {
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
});

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
    <div
      style={{
        paddingTop: "120px",
        display: "flex",
        flexFlow: "wrap row",
        alignItems: "center",
      }}
    >
      {users.map((user) => (
        <div key={user.id} style={{ flexBasis: "30%", margin: "4px 24px" }}>
          <BoxContainer>
            <div className={classes.container}>
              <AvatarCreater username={user.name} />
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "8px",
                  fontWeight: "bolder",
                  cursor: "pointer",
                  color: "#05a0e7",
                }}
              >
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
