import React from 'react'
import Blog from './Blog'

import { useDispatch, useSelector } from 'react-redux'

const BlogList = ({
  handleLike,
  handleRemove,
  user,
  openDialog,
  handleClose
}) => {
  const blogs = useSelector(({ blogs }) => {
    return blogs
  })
  console.log('blogs', blogs)
  blogs.sort((a, b) => b.likes - a.likes)
  return blogs.map(blog => (
    <Blog
      key={blog.id}
      blog={blog}
      handleLike={handleLike}
      handleRemove={handleRemove}
      user={user}
      openDialog={openDialog}
      handleClose={handleClose}
    />
  ))
}

export default BlogList
