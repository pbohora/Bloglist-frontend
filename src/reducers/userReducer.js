/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { setToken } from "../services/blog";
import { login } from "../services/login";

const initialState = { user: null, error: null, sucess: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      window.localStorage.setItem(
        "loggedBLogUser",
        JSON.stringify(action.data)
      );
      setToken(action.data.token);
      return {
        user: action.data,
        error: null,
        sucess: null,
      };
    case "SET_USER":
      return { user: action.data, error: null, sucess: null };
    case "REMOVE_USER":
      window.localStorage.clear();
      return { user: action.data, error: null, sucess: null };
    case "SET_ERROR":
      return { user: state.user, error: action.data, sucess: null };
    case "SET_SUCESS":
      return { user: state.user, error: null, sucess: action.data };
    case "REMOVE_NOTIFICATION":
      return { user: state.user, error: null, sucess: null };
    default:
      return state;
  }
};

export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await login({ username, password });

      dispatch({
        type: "LOGIN_USER",
        data: user,
      });
      dispatch({
        type: "SET_SUCESS",
        data: `Logged in as ${user.name}`,
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        5000
      );
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        data: "Invalid username or password",
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        5000
      );
    }
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    data: user,
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
    data: null,
  };
};

export default userReducer;
