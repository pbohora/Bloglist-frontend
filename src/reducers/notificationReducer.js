/* eslint-disable no-case-declarations */
/* eslint-disable indent */
const blogReducer = (state = { error: null, sucess: null }, action) => {
  switch (action.type) {
    case 'SUCESS_NOTIFICATION':
      return { ...state, sucess: action.data }
    case 'ERROR_NOTIFICATION':
      return { ...state, error: action.data }
    default:
      return state
  }
}

export const setSucess = notification => {
  return {
    type: 'SUCESS_NOTIFICATION',
    data: notification
  }
}

export const setError = notification => {
  return {
    type: 'ERROR_NOTIFICATION',
    data: notification
  }
}

export default blogReducer
