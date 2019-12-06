import React from 'react'

const Blog = ({ blog }) => (
  <li>
    <span>{blog.title}</span>
    <span>{blog.url}</span>
    <span>{blog.author}</span>
  </li>
)

export default Blog
