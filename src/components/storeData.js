import { useEffect } from "react";

import { useContext } from "react";
import { setBook } from "../context/book.action";
import { BookContext } from "../context/book.context";
import { BASE_URL, getCategoryURL } from "../resources/constants";

const StoreData = () => {
  const { dispatch, category } = useContext(BookContext);

  useEffect(() => {
    fetch(getCategoryURL(category))
      .then((response) => response.json())
      .then((booksData) => {
        dispatch(setBook(booksData));
      });
  }, [dispatch, category]);

  return null;
};

export default StoreData;
