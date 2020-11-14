import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createBlog } from "../reducers/blogReducer";
// import { setSucess, setError } from "../reducers/notificationReducer";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 120px",
    backgroundColor: "transparent",
  },
  createButton: {
    marginLeft: "auto",
    background: "#05a0e7",
    border: "1px solid #05a0e7",
    color: "white",
    "&:hover": {
      background: " #048ac8",
    },
  },

  margin: {
    margin: theme.spacing(4, 0),
    color: "white",
  },
}));
const BlogpostForm = ({ history }) => {
  const [newBlog, setNewBlog] = useState({ title: "", author: "", url: "" });

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    //console.log(newBlog)
  };

  const onSubmit = (e) => {
    console.log("history", history);
    e.preventDefault();
    dispatch(createBlog(newBlog));
    setNewBlog({ title: "", author: "", url: "" });
    history.push("/blogs");
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <label>TITLE</label>

      <FormControl fullWidth className={classes.margin} variant="filled">
        <TextField
          type="text"
          value={newBlog.title}
          name="title"
          onChange={handleChange}
          id="title"
          label="Blog Title"
          variant="outlined"
        />
      </FormControl>
      <label>AUTHOR</label>

      <FormControl fullWidth className={classes.margin} variant="filled">
        <TextField
          type="text"
          value={newBlog.author}
          name="author"
          onChange={handleChange}
          id="author"
          label="Author"
          color="secondary"
          variant="outlined"
        />
      </FormControl>
      <label>URL</label>

      <FormControl fullWidth className={classes.margin} variant="filled">
        <TextField
          type="text"
          value={newBlog.url}
          name="url"
          onChange={handleChange}
          id="url"
          label="Blog URL"
          variant="outlined"
        />
      </FormControl>

      <CardActions>
        <Button
          id="add-blog"
          className={classes.createButton}
          size="large"
          variant="contained"
          color="primary"
          type="submit"
        >
          Create
        </Button>
      </CardActions>
    </form>
  );
};

export default withRouter(BlogpostForm);
