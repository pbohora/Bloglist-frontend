import React from "react";
import Blog from "./Blog";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
//  import { updateBlog, removeBlog } from "../../reducers/blogReducer";
// import { setSucess, setError } from "../../reducers/notificationReducer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  blogWrapper: {
    [theme.breakpoints.down("sm")]: {
      margin: "4px 10px",
    },

    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      margin: "4px 16px",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "45%",
      margin: "4px 24px",
    },
  },
}));

const BlogList = ({ user, openDialog, handleClose }) => {
  const classes = useStyles();

  const blogsData = useSelector(({ blogs }) => {
    return blogs;
  });
  const blogs = blogsData.blogs;

  //   const handleLike = async (id) => {
  //     const blog = blogs.find((blog) => blog.id === id);
  //     console.log(blog);
  //     const changedBlog = { ...blog, likes: blog.likes + 1 };
  //     dispatch(updateBlog(id, changedBlog));
  //   };

  //   const handleRemove = async (id) => {
  //     const blog = blogs.find((blog) => blog.id === id);

  //     dispatch(removeBlog(id));
  //   };

  blogs.sort((a, b) => b.likes - a.likes);
  return (
    <div className={classes.container}>
      {blogs.map((blog) => (
        <div key={blog.id} className={classes.blogWrapper}>
          <Blog
            blog={blog}
            user={user}
            // openDialog={openDialog}
            // handleClose={handleClose}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
