import { SET_LOGGED_IN } from "../actions";

const initialState = {
  plants: [],
  hasAccount: false,
  isLoggedIn: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    //default case starter
    default:
      //   console.log("Error: unknown action type");
      return state;
  }
};
