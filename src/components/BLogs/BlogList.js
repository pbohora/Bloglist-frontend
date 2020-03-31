import React from 'react'
import Blog from './Blog'

import { useDispatch, useSelector } from 'react-redux'
import { updateBlog, removeBlog } from '../../reducers/blogReducer'

const BlogList = ({ user, openDialog, handleClose }) => {
  const dispatch = useDispatch()
  const blogs = useSelector(({ blogs }) => {
    return blogs
  })

  console.log('blogs', blogs)

  const handleLike = id => {
    const blog = blogs.find(blog => blog.id === id)
    console.log(blog)
    const changedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(updateBlog(id, changedBlog))
  }

  const handleRemove = id => {
    dispatch(removeBlog(id))
  }

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
