import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import authImage from "../Assests/network.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: " center",
  },
  imgContainer: {
    width: "450px",
    height: "420px",
    padding: "32px 44px",
    backgroundPosition: " center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(to bottom,  rgba(245, 246, 252, 0.52), rgba(158, 67, 135, 0.73)), url(${authImage})`,
    color: "white",
  },
  authBtn: {
    alignSelf: "center",
    width: "180px",
    padding: "10px 40px",
    marginRight: "16px",
    background: "#4a4a48",
    color: "white",
    "&:hover": {
      background: "#383838",
    },
  },
}));

const AuthContainer = ({ children, btnText, onSubmit, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <h2>Hello, Welcome to MyBlogs!</h2>
        <p>{text}</p>
        <Button
          onClick={onSubmit}
          size="large"
          variant="contained"
          type="submit"
          className={classes.authBtn}
        >
          {btnText}
        </Button>
      </div>

      {children}
    </div>
  );
};

export default AuthContainer;
