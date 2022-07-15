import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "./types";

export const addToFavourite = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVOURITE, payload: [item.id, item] });
};

export const removeFromFavourite = (item) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_FAVOURITE, payload: item.id });
};
