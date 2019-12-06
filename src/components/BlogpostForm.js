import React from 'react'

const BlogpostForm = ({ onBlogSubmit, handleChange, newBlog }) => {
  return (
    <form onSubmit={onBlogSubmit}>
      <label>Title</label>
      <input
        type='text'
        value={newBlog.title}
        name='title'
        onChange={handleChange}
      />
      <label>Author</label>
      <input
        type='text'
        value={newBlog.author}
        name='author'
        onChange={handleChange}
      />
      <label>Url</label>
      <input
        type='text'
        value={newBlog.url}
        name='url'
        onChange={handleChange}
      />
      <button type='submit'>Create</button>
    </form>
  )
}

export default BlogpostForm
