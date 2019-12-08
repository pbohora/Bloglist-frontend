import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, handleLike, handleRemove, user }) => {
  blogs.sort((a, b) => b.likes - a.likes)
  return blogs.map(blog => (
    <Blog
      key={blog.id}
      blog={blog}
      handleLike={handleLike}
      handleRemove={handleRemove}
      user={user}
    />
  ))
}

export default BlogList
