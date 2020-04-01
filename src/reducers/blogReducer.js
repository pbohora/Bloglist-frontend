/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { getAll, create, update, remove } from '../services/blog'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'INIT_BLOGS':
      return action.data
    case 'UPDATE_BLOG':
      const id = action.data.id
      const likedBlog = action.data

      return state.map(blog => (blog.id !== id ? blog : likedBlog))
    case 'REMOVE_BLOG':
      const LikeId = action.data.id
      return state.filter(blog => blog.id !== LikeId)
    default:
      return state
  }
}

export const createBlog = content => {
  return async dispatch => {
    const newBlogPost = await create(content)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlogPost
    })
  }
}

export const updateBlog = (id, changedBlog) => {
  return async dispatch => {
    const likedBlog = await update(id, changedBlog)
    dispatch({
      type: 'UPDATE_BLOG',
      data: likedBlog
    })
  }
}

export const removeBlog = id => {
  return async dispatch => {
    await remove(id)
    dispatch({
      type: 'REMOVE_BLOG',
      data: { id }
    })
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export default blogReducer
