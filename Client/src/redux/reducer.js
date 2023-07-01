import { ADD_FAV, FILTER, REMOVE_FAV, ORDER , GET_FAV } from "./action-type";

const initialState = {
  myFavorites: [], // = [{character1} , {character2} , {character3}]
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case GET_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case FILTER:
      let copy2 = state.allCharacters;
      if (action.payload !== "All") {
        let copy3 = copy2.filter(
          (character) => character.gender === action.payload
        );
        return { ...state, myFavorites: copy3 };
      } else {
        return { ...state, myFavorites: [...state.allCharacters] };
      }
    case ORDER:
      const copy3 = state.allCharacters.sort((a, b) => {
        if (action.payload === "A") {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        } else {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        }
      });
      return { ...state, myFavorites: copy3 };
    default:
      return { ...state };
  }
};

export default rootReducer;
