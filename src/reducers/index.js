import { TOGGLE_SIDE_NAV } from "../actions";

const initialState = {
  plants: [],
  hasAccount: false,
  showSideNav: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      return { ...state, showSideNav: true };
    //default case starter
    default:
      //   console.log("Error: unknown action type");
      return state;
  }
};
