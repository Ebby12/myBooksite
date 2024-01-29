import bookActionTypes from "./book.types";

export const INITIAL_STATE = {
  books: [],
  category: "love",
};

export const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bookActionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case bookActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
