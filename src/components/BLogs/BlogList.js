import React from 'react'
import Blog from './Blog'

import { useDispatch, useSelector } from 'react-redux'
import { updateBlog, removeBlog } from '../../reducers/blogReducer'
import { setSucess, setError } from '../../reducers/notificationReducer'

const BlogList = ({ user, openDialog, handleClose }) => {
  const dispatch = useDispatch()

  const blogsData = useSelector(({ blogs }) => {
    return blogs
  })
  const blogs = blogsData.blogs
  console.log('blogs', blogs)
  console.log('blogsData', blogsData)

  const handleLike = async (id) => {
    try {
      const blog = blogs.find((blog) => blog.id === id)
      console.log(blog)
      const changedBlog = { ...blog, likes: blog.likes + 1 }
      dispatch(updateBlog(id, changedBlog))
    } catch (exception) {
      dispatch(setError('can not update'))
      setTimeout(() => {
        dispatch(setError(null))
      }, 5000)
    }
  }

  const handleRemove = async (id) => {
    const blog = blogs.find((blog) => blog.id === id)

    dispatch(removeBlog(id))
  }

  blogs.sort((a, b) => b.likes - a.likes)
  return blogs.map((blog) => (
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
