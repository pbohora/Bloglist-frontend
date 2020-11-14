import React from "react";
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
import { Link, Redirect, withRouter } from "react-router-dom";

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
}));

const SignupForm = ({ handleClickShowPassword, showPassword }) => {
  const classes = useStyles();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={classes.root}>
        <form>
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
                />
              </FormControl>
            </div>

            <div>
              <FormControl fullWidth className={classes.margin}>
                <OutlinedInput
                  id="input-with-icon-adornment"
                  placeholder="User Name"
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
            <div>
              <FormControl fullWidth className={classes.margin}>
                <OutlinedInput
                  id="standard-adornment-password"
                  placeholder="Conform Password"
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
