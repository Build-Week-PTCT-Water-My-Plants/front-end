import axios from "axios";
import dummyData from "../data/dummyData";

export const SET_LOGGED_IN = "SET_LOGGED_IN";

export const GET_PLANTS_START = "GET_PLANTS_START";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAIL = "GET_PLANTS_FAIL";

export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL";

export const setLoggedIn = () => {
  return {
    type: SET_LOGGED_IN,
  };
};

export const getPlants = () => (dispatch) => {
  dispatch({ type: GET_PLANTS_START });

  //change to axiosWithAuth after login functional with protected route
  axios
    .get("https://reqres.in/api/unknown")
    .then((res) => {
      console.log("Get Plants res: ", res);
      dispatch({ type: GET_PLANTS_SUCCESS, payload: dummyData });
    })
    .catch((err) => {
      console.log("Get Plants err: ", err);
      dispatch({ type: GET_PLANTS_FAIL, payload: err });
    });
};

export const deletePlant = (id) => (dispatch) => {
  dispatch({ type: DELETE_PLANT_START });

  axios
    .delete("https://reqres.in/api/users/2")
    .then((res) => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({ type: DELETE_PLANT_FAIL });
    });
};
