import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import BoxContainer from "../BoxContainer";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import { updateBlog, removeBlog } from "../../reducers/blogReducer";

// import DialogBox from "../DialogBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: "32px",
    marginBottom: "8px",
    fontWeight: "bolder",
    cursor: "pointer",
    color: "#05a0e7",
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
    fontWeight: "bold",
    color: "#595959",
  },
  subContent: {
    color: "#737373",
    fontWeight: "bold",
  },
  textContent: {
    height: "140px",
  },
  blogLink: {
    fontWeight: "bold",
    color: "#00b3b3",
    padding: "20px 0",
  },
  likes: {
    marginTop: "20px",
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
          <div className={classes.root}>
            <div onClick={handleDetail} className={classes.header}>
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
          <span className={classes.subContent}>Creater: {blog.author}</span>
          <p className={classes.textContent}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </p>

          <a className={classes.blogLink} href={blog.url}>
            Original Link
          </a>
          <div className={classes.likes}>
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
            <p className={classes.addedby}>
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
