import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },

  cancelButton: {
    marginLeft: "auto",

    color: "#05a0e7",
  },
  addButton: {
    alignSelf: "center",
    padding: "12px 36px",
    fontSize: "20px",
    background: "#05a0e7",
    border: "1px solid #05a0e7",
    color: "white",
    "&:hover": {
      background: " #048ac8",
    },
  },
  createbutton: {
    paddingLeft: "16px",
  },
}));

const Togglable = ({ children, buttonLabel }) => {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={classes.root}>
        <Button
          onClick={toggleVisibility}
          style={hideWhenVisible}
          size="large"
          variant="contained"
          type="submit"
          className={classes.addButton}
        >
          {buttonLabel}
          <CreateIcon className={classes.createbutton} />
        </Button>
      </div>
      <div style={showWhenVisible}>
        <CardActions>
          <IconButton
            className={classes.cancelButton}
            onClick={toggleVisibility}
            color="secondary"
            aria-label="add an alarm"
            variant="contained"
          >
            <ClearIcon style={{ fontSize: 40 }} />
          </IconButton>
        </CardActions>
        {children}
      </div>
    </>
  );
};

export default Togglable;
