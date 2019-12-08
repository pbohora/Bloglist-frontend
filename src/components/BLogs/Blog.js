import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, handleLike, handleRemove, user }) => {
  const [showDetail, setShowDetail] = useState(false)
  const handleShowDetail = () => setShowDetail(!showDetail)

  const blogStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    margin: 15
  }

  return (
    <div style={blogStyle}>
      <div onClick={handleShowDetail}>
        {blog.title} {blog.author}
      </div>
      {showDetail && (
        <div>
          <div>
            <a href=''>{blog.url}</a>
          </div>
          <div>
            {blog.likes} likes{' '}
            <button onClick={() => handleLike(blog.id)}>like</button>
            <div>Added by {blog.user.name} </div>
            {user !== null && user.id === blog.user.id && (
              <button onClick={() => handleRemove(blog.id)}>remove</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  handleLike: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Blog
