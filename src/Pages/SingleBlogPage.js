import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import BoxContainer from "../components/BoxContainer";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateBlog, removeBlog } from "../reducers/blogReducer";

const useStyles = makeStyles((theme) => ({
  userHaeder: {
    padding: "16px 32px 2px 32px",
    backgroundColor: "#05a0e7",
    color: "white",
    marginTop: "100px",
  },
  margin: {
    margin: theme.spacing(4, 0),
  },

  likeIcon: {
    "&:hover": {
      color: "#024517",
    },
  },
}));

const SingleBlogPage = ({ user, handleLogOut }) => {
  const classes = useStyles();

  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogsData = useSelector(({ blogs }) => {
    return blogs;
  });
  const id = useParams().id;
  const selectedBlog = blogsData.blogs.find((blog) => blog.id === id);
  console.log(selectedBlog);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleLike = async (id) => {
    const blog = blogsData.blogs.find((blog) => blog.id === id);
    const changedBlog = { ...blog, likes: blog.likes + 1 };
    dispatch(updateBlog(id, changedBlog));
  };

  const handleComment = (e) => {
    e.preventDefault();

    const blog = blogsData.blogs.find((blog) => blog.id === id);
    if (newComment.length > 3) {
      const changedBlog = {
        ...blog,
        comments: blog.comments.concat(newComment),
      };

      dispatch(updateBlog(id, changedBlog));

      setNewComment("");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeBlog(id));
  };

  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      {selectedBlog && (
        <>
          <div className={classes.userHaeder}>
            <h2>{selectedBlog.title}</h2>
          </div>
          <BoxContainer>
            <h3>Author : {selectedBlog.author}</h3>
            <div>
              <Typography component="p" color="textSecondary">
                Visit:
                <a href="">{selectedBlog.url}</a>
              </Typography>
            </div>
            <Typography variant="subtitle1" component="p">
              {selectedBlog.content}
            </Typography>
            <h4>Added by {selectedBlog.user.name}</h4>
            <div>
              <IconButton
                id="like-button"
                data-testid="like-button"
                className={classes.likeIcon}
                aria-label="add to favorites"
                onClick={() => handleLike(id)}
              >
                <FavoriteIcon />
              </IconButton>
              {selectedBlog.likes} Likes
            </div>
            <h4>Comments</h4>
            {selectedBlog.comments &&
              selectedBlog.comments.map((comment) => (
                <li key={comment}>{comment}</li>
              ))}
            <form onSubmit={handleComment}>
              <FormControl fullWidth className={classes.margin}>
                <TextField
                  type="text"
                  value={newComment}
                  id="title"
                  label="Add new Comment"
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                id="add-blog"
                className={classes.createButton}
                size="large"
                variant="contained"
                color="primary"
                type="submit"
              >
                Add comment
              </Button>
            </form>
          </BoxContainer>
        </>
      )}
    </Layout>
  );
};

export default SingleBlogPage;
