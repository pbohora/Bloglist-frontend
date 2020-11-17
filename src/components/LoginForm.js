import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useField } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
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
import { loginUser } from "../reducers/userReducer";

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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector(({ user }) => {
    return user;
  });
  const classes = useStyles();
  const userName = useField("text");
  const passWord = useField(showPassword ? "text" : "password");

  const username = userName.value;
  const password = passWord.value;

  useEffect(() => {
    if (userData.sucess !== null) {
      history.push("/blogs");
    }
  }, [userData]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleLogin(event);
  };

  const handleClickShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(loginUser(username, password));
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
