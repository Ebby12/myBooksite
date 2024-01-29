import React, { useReducer, createContext } from "react";
import { bookReducer, INITIAL_STATE } from "./book.reducer";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, INITIAL_STATE);

  const { books, category } = state;

  return (
    <BookContext.Provider value={{ books, category, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
