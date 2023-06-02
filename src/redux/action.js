import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";
//en este archivo se crean funciones que crean actions y en el archivo del componente de react se le inserta atraves
//de mapDispatchToProps la posibilidad de llamar a estas funciones y luego pasarle la actions que retornan.
export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};
