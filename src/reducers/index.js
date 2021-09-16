const initialState = {
  plants: [],
  hasAccount: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    //default case starter
    default:
      //   console.log("Error: unknown action type");
      return state;
  }
};
