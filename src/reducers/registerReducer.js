/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { registerUser } from "../services/users";

const initialState = { error: null, sucess: null };

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REGISTERERROR":
      return { error: action.data, sucess: null };
    case "SET_REGISTERSUCESS":
      return { error: null, sucess: action.data };
    case "REMOVE_REGISTERNOTIFICATION":
      return { error: null, sucess: null };
    default:
      return state;
  }
};

export const signupUser = (name, username, password) => {
  return async (dispatch) => {
    try {
      await registerUser({ name, username, password });

      dispatch({
        type: "SET_REGISTERSUCESS",
        data: `Sucessfully registered`,
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_REGISTERNOTIFICATION",
          }),
        5000
      );
    } catch (error) {
      dispatch({
        type: "SET_REGISTERERROR",
        data: error.response.data.error,
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_REGISTERNOTIFICATION",
          }),
        5000
      );
    }
  };
};

export default registerReducer;
