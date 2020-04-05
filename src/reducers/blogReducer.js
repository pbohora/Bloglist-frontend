/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { getAll, create, update, remove } from '../services/blog'

const initialState = { blogs: [], error: null, sucess: null }

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_BLOG':
      return {
        blogs: [...state.blogs, action.data],
        error: null,
        sucess: null,
      }
    case 'INIT_BLOGS':
      return { blogs: action.data, error: null, sucess: null }
    case 'UPDATE_BLOG':
      const id = action.data.id
      const updatedBlog = action.data

      return {
        blogs: state.blogs.map((blog) => (blog.id !== id ? blog : updatedBlog)),
        error: null,
        sucess: null,
      }
    case 'REMOVE_BLOG':
      const LikeId = action.data.id
      return {
        blogs: state.blogs.filter((blog) => blog.id !== LikeId),
        error: null,
        sucess: null,
      }
    case 'SET_ERROR':
      return { blogs: state.blogs, error: action.data, sucess: null }
    case 'SET_SUCESS':
      return { blogs: state.blogs, error: null, sucess: action.data }
    case 'REMOVE_NOTIFICATION':
      return { blogs: state.blogs, error: null, sucess: null }
    default:
      return state
  }
}

export const createBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlogPost = await create(content)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlogPost,
      })
      dispatch({
        type: 'SET_SUCESS',
        data: `Added blog ${content.title} by ${content.author}`,
      })
      setTimeout(
        () =>
          dispatch({
            type: 'REMOVE_NOTIFICATION',
          }),
        5000
      )
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        data: 'All fields must be filled',
      })
      setTimeout(
        () =>
          dispatch({
            type: 'REMOVE_NOTIFICATION',
          }),
        5000
      )
    }
  }
}

export const updateBlog = (id, changedBlog) => {
  return async (dispatch) => {
    const updatedBlog = await update(id, changedBlog)
    dispatch({
      type: 'UPDATE_BLOG',
      data: updatedBlog,
    })
  }
}

export const removeBlog = (id) => {
  return async (dispatch) => {
    try {
      await remove(id)
      dispatch({
        type: 'REMOVE_BLOG',
        data: { id },
      })
      dispatch({
        type: 'SET_SUCESS',
        data: 'Deleted blog',
      })
      setTimeout(
        () =>
          dispatch({
            type: 'REMOVE_NOTIFICATION',
          }),
        5000
      )
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        data: 'Can not remove the blog, not authorized',
      })
      setTimeout(
        () =>
          dispatch({
            type: 'REMOVE_NOTIFICATION',
          }),
        5000
      )
    }
  }
}

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export default blogReducer
