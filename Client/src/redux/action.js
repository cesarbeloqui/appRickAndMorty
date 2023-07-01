import { ADD_FAV, REMOVE_FAV, FILTER, ORDER , GET_FAV } from "./action-type";
//en este archivo se crean funciones que crean actions y en el archivo del componente de react se le inserta atraves
//de mapDispatchToProps la posibilidad de llamar a estas funciones y luego pasarle la actions que retornan.
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const { data } = response;
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      // Manejar el error
    }
  };
};
export const getFav = () => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      dispatch({
        type: GET_FAV,
        payload: data,
      });
    } catch (error) {
      // Manejar el error
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const { data } = response;
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      // Manejar el error
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};
