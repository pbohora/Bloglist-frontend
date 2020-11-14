import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 60,
    width: "50%",
    height: "100%",
  },

  margin: {
    margin: theme.spacing(4, 0),
  },

  loginButton: {
    background: "#45d0ff",
    color: "white",
    marginLeft: "auto",
    width: "180px",
    padding: "10px 40px",
    "&:hover": {
      background: "#09aae0",
    },
  },
}));

const LoginForm = ({
  handleLogin,
  userName,
  passWord,
  handleClickShowPassword,
  showPassword,
  history,
}) => {
  const classes = useStyles();
  // console.log('history', history)
  const onSubmit = (event) => {
    // console.log(event)
    event.preventDefault();
    handleLogin(event);

    history.push("/blogs");
  };
  // console.log('history2', history)
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={classes.root}>
        <form onSubmit={onSubmit}>
          <CardContent>
            <div>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <OutlinedInput
                  id="username"
                  placeholder="User Name"
                  {...userName}
                  endAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <OutlinedInput
                  id="password"
                  placeholder="Password"
                  {...passWord}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </CardContent>
          <CardActions>
            <Button
              id="login-button"
              className={classes.loginButton}
              size="large"
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </CardActions>
        </form>
      </div>
    </>
  );
};

export default withRouter(LoginForm);
