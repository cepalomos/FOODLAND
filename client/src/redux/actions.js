//IMPORTS
import axios from "axios";
import * as action from "./action-types"; // Import para traer todas las actions-types

// const URL = "http://localhost:5000";
const URL = "https://foodland-back.onrender.com";

/* ========================*  LOADER *======================== */
export function loading() {
  return {
    type: action.LOADING,
  };
}

export function ready() {
  return {
    type: action.READY,
  };
}

/* ========================*  PRODUCTS *======================== */

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);
      console.log(response);
      dispatch({
        type: action.GET_ALL_PRODUCTS,
        payload: response.data,
      });
      dispatch(ready());
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_ALL_PRODUCTS,
        payload: error,
      });
      dispatch(ready());
    }
  };
};
/* ===========================* Search *=========================== */

export const resultSearch = (result) => {


  return async (dispatch) => {
    try {
  dispatch(loading());
      dispatch({
        type: action.RESULTSEARCH,
        payload: result,
      });
  dispatch(ready());
    
    } catch (error) {

    console.log (error);
  }
}
};

