import {
  DELETE_PLANT_FAIL,
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  GET_PLANTS_FAIL,
  GET_PLANTS_START,
  GET_PLANTS_SUCCESS,
  SET_LOGGED_IN,
} from "../actions";

const initialState = {
  plants: [],
  isLoggedIn: false,
  loadingPlants: false,
  plantsError: "",
  deletingPlant: false,
  deletePlantError: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case GET_PLANTS_START:
      return { ...state, loadingPlants: true };
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        loadingPlants: false,
      };
    case GET_PLANTS_FAIL:
      return {
        ...state,
        plantsError: "loading plants failed, please try again",
        loadingPlants: false,
      };
    case DELETE_PLANT_START:
      return {
        ...state,
        deletingPlant: true,
      };
    case DELETE_PLANT_SUCCESS:
      return {
        ...state,
        plants: state.plants.filter((plant) => action.payload !== plant.id),
        deletingPlant: false,
      };
    case DELETE_PLANT_FAIL:
      return {
        ...state,
        deletePlantError: "error, cannot delete...please try again",
        deletingPlant: false,
      };
    //default case starter
    default:
      // console.log("Error: unknown action type");
      return state;
  }
};
