export const BASE_URL = "https://openlibrary.org/";

export const getImageURL = (imageId) => {
  return "https://covers.openlibrary.org/" + "b/id/" + imageId + "-L.jpg";
};

export const getAuthorURL = (author) => {
  return BASE_URL + "search/authors.json?q=" + author;
};

export const getBookDetailURL = (bookId) => {
  return BASE_URL + "books/" + bookId;
};

export const getCategoryURL = (category) => {
  return (
    BASE_URL + "subjects/" + String(category).toLocaleLowerCase() + ".json"
  );
};
