/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { getAll, create, update, remove, setToken } from '../services/blog'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'INIT_BLOGS':
      return action.data
    case 'LIKE_BLOG':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note => (note.id !== id ? note : changedNote))
    default:
      return state
  }
}

export const createBlog = content => {
  return async dispatch => {
    const newBlog = await create(content)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const likeBlog = id => {
  return {
    type: 'LIKE_BLOG',
    data: { id }
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
