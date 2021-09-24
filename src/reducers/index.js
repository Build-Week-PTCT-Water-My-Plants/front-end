import {
  ADD_PLANT_FAIL,
  ADD_PLANT_START,
  ADD_PLANT_SUCCESS,
  DELETE_PLANT_FAIL,
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  GET_PLANTS_FAIL,
  GET_PLANTS_START,
  GET_PLANTS_SUCCESS,
  SET_EDITING,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  SUBMIT_EDIT_FAIL,
  SUBMIT_EDIT_START,
  SUBMIT_EDIT_SUCCESS,
  UNSET_EDITING,
} from "../actions";

import dummyData from "../data/dummyData";

const initialState = () => {
  return {
    plants: dummyData,
    isLoggedIn: false,
    loadingPlants: false,
    plantsError: "",
    deletingPlant: false,
    deletePlantError: "",
    loadingLogin: false,
    addingPlant: false,
    addPlantError: "",
    isEditing: false,
    editingPlants: false,
  };
};

//GET_PLANTS_SUCCESS needs a payload from a real get request, using dummyData to intialize for now
export const appReducer = (state = initialState(), action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case SET_LOGGED_OUT:
      return { ...state, isLoggedIn: false };
    case GET_PLANTS_START:
      return { ...state, loadingPlants: true };
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        // plants: action.payload,
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
    case ADD_PLANT_START:
      return {
        ...state,
        addingPlant: true,
      };
    case ADD_PLANT_SUCCESS:
      return {
        ...state,
        plants: [...state.plants, action.payload],
        addingPlant: false,
      };
    case ADD_PLANT_FAIL:
      return {
        ...state,
        addPlantError: "Error adding plant, please try again",
        addingPlant: false,
      };
    case SET_EDITING:
      return {
        ...state,
        isEditing: true,
      };
    case UNSET_EDITING:
      return {
        ...state,
        isEditing: false,
      };
    case SUBMIT_EDIT_START:
      return {
        ...state,
        editingPlants: true,
      };
    case SUBMIT_EDIT_SUCCESS:
      return {
        ...state,
        plants: state.plants.map((plant) => {
          if (plant.id.toString() === action.payload.id.toString()) {
            return action.payload;
          } else return plant;
        }),
        editingPlants: false,
      };
    case SUBMIT_EDIT_FAIL:
      return {
        ...state,
        editingPlants: false,
      };
    //default case starter
    default:
      // console.log("Error: unknown action type");
      return state;
  }
};
