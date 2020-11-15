import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    color: "#f74434",
  },
  blogSpan: {
    color: "#05a0e7",
    fontWeight: "bold",
  },
}));

const DialogBox = ({ openDialog, handleClick, handleClose, blog }) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={openDialog}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          className={classes.dialogTitle}
          id="alert-dialog-slide-title"
        >
          {"Delete the blog?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure ? You want to delete the blog{" "}
            <span className={classes.blogSpan}>{blog.title}</span> by Author:{" "}
            <span className={classes.blogSpan}>{blog.author}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button id="confirm" onClick={handleClick} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
