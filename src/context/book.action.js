import bookActionTypes from "./book.types";

export const setBook = (status) => {
  return { type: bookActionTypes.SET_BOOKS, payload: status };
};

export const setCategory = (cat) => {
  return { type: bookActionTypes.SET_CATEGORY, payload: cat };
};
