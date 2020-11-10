import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import BoxContainer from "../BoxContainer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { updateBlog, removeBlog } from "../../reducers/blogReducer";

import DialogBox from "../DialogBox";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 270,
    maxWidth: 700,
    padding: "30px 0",
    cursor: "pointer",
    alignItems: "center",
    //     margin: theme.spacing(4, 0),
    "&:hover": {},
  },
  readMoreButton: {
    background: "#66605b",
    color: "white",
    maxWidth: 160,
    "&:hover": {
      background: "#1a1918",
    },
  },
  likeIcon: {
    padding: 0,
    fontSize: 33,
    "&:hover": {
      color: "#05a0e7",
    },
  },
  deleteIcon: {
    right: 0,
    padding: 0,
    "&:hover": {
      color: "red",
    },
  },
  addedby: {
    marginLeft: "auto",
    padding: theme.spacing(0, 4),
  },
}));
const Blog = ({ blog, user, history }) => {
  const dispatch = useDispatch();

  const blogsData = useSelector(({ blogs }) => {
    return blogs;
  });
  const blogs = blogsData.blogs;

  const handleLike = async (id) => {
    const blog = blogs.find((blog) => blog.id === id);
    console.log(blog);
    const changedBlog = { ...blog, likes: blog.likes + 1 };
    dispatch(updateBlog(id, changedBlog));
  };

  const handleRemove = async (id) => {
    const blog = blogs.find((blog) => blog.id === id);

    dispatch(removeBlog(id));
  };
  const [showDetail, setShowDetail] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => setOpenDialog(false);

  const handleShowDetail = () => setShowDetail(!showDetail);
  const handleClick = () => {
    handleRemove(blog.id);
    handleClose();
  };

  const handleDetail = (event) => {
    event.preventDefault();
    history.push(`/blogs/${blog.id}`);
  };

  const classes = useStyles();

  return (
    <>
      <BoxContainer>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              onClick={handleDetail}
              style={{
                fontSize: "32px",
                marginBottom: "8px",
                fontWeight: "bolder",
                cursor: "pointer",
                color: "#05a0e7",
              }}
            >
              {blog.title}
            </div>
            {blog.user && user !== null && user.id === blog.user.id && (
              <IconButton
                id="delete-button"
                className={classes.deleteIcon}
                aria-label="delete"
                onClick={() => setOpenDialog(true)}
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
            )}
          </div>
          <span style={{ color: "#737373", fontWeight: "bold" }}>
            Creater: {blog.author}
          </span>
          <p style={{ height: "120px" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </p>

          <a
            style={{ fontWeight: "bold", color: "#00b3b3", padding: "20px 0" }}
            href={blog.url}
          >
            Original Link
          </a>
          <div style={{ marginTop: "20px" }}>
            <IconButton
              id="like-button"
              data-testid="like-button"
              className={classes.likeIcon}
              aria-label="add to favorites"
              onClick={() => handleLike(blog.id)}
            >
              <FavoriteIcon fontSize="large" />
            </IconButton>
            {blog.likes} Likes
          </div>
          {blog.user && (
            <p style={{ fontWeight: "bold", color: "#595959" }}>
              Added by: <span>{blog.user.name}</span>
            </p>
          )}
        </div>
      </BoxContainer>
    </>
  );
};
Blog.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  handleLike: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default withRouter(Blog);
