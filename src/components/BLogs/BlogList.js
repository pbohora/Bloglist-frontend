import React from "react";
import Blog from "./Blog";

import { useDispatch, useSelector } from "react-redux";
//  import { updateBlog, removeBlog } from "../../reducers/blogReducer";
import { setSucess, setError } from "../../reducers/notificationReducer";

const BlogList = ({ user, openDialog, handleClose }) => {
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
    <div
      style={{
        display: "flex",
        flexFlow: "wrap row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {blogs.map((blog) => (
        <div key={blog.id} style={{ flexBasis: "45%", margin: "4px 24px" }}>
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
