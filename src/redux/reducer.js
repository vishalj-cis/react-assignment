/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "./types";

var initialState = {
  beers: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      state.beers[action.payload[0]] = action.payload[1];
      return {
        ...state,
      };
    case REMOVE_FROM_FAVOURITE:
      delete state.beers[action.payload];
      return {
        ...state,
      };
    default:
      return state;
  }
}
