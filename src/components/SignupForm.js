import React, { useState, useEffect } from "react";
import { useField } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";
import { signupUser } from "../reducers/registerReducer";
import { allUsers } from "../reducers/usersReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 60px",
    height: "100%",
    width: "50%",
  },

  margin: {
    margin: theme.spacing(2.5, 0),
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
  resetButton: {
    marginLeft: "auto",
  },
  errorLabel: {
    color: "#f74434",
    padding: "10px",
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);

  const register = useSelector(({ register }) => {
    return register;
  });

  const fullName = useField("text");
  const userName = useField("text");
  const passWord = useField(showPassword ? "text" : "password");
  const confirmPassword = useField(showConfirmPassword ? "text" : "password");

  const name = fullName.value;
  const username = userName.value;
  const password = passWord.value;
  const confirmpassword = confirmPassword.value;

  useEffect(() => {
    if (register.sucess !== null) {
      history.push("/login");
      dispatch(allUsers());
    }
  }, [register]);

  const handleClickShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = (e) => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setPasswordError("Password do not match.");
    } else {
      setPasswordError(null);
      dispatch(signupUser(name, username, password));
    }
  };

  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSignup}>
          <CardContent>
            <div>
              <FormControl
                fullWidth
                variant="outlined"
                className={classes.margin}
              >
                <OutlinedInput
                  id="standard-adornment-password"
                  placeholder="Full Name"
                  {...fullName}
                />
              </FormControl>
            </div>

            <div>
              <FormControl fullWidth className={classes.margin}>
                <OutlinedInput
                  id="input-with-icon-adornment"
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
              <FormControl fullWidth className={classes.margin}>
                <OutlinedInput
                  id="standard-adornment-password"
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
            <div>
              <FormControl fullWidth className={classes.margin}>
                {passwordError && (
                  <label className={classes.errorLabel}>{passwordError}</label>
                )}
                <OutlinedInput
                  id="standard-adornment-password"
                  placeholder="Conform Password"
                  {...confirmPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </CardContent>

          <CardActions>
            <Button
              className={classes.loginButton}
              size="large"
              variant="contained"
              type="submit"
            >
              Sign up
            </Button>
          </CardActions>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
