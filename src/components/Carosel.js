// BookCarousel.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BookContext } from "../context/book.context";
import { getImageURL } from "../resources/constants";

const books = [
  // Add your book data here (image URLs, titles, etc.)
];

const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const BookItem = styled.div`
  position: relative;
  width: 200px; /* Adjust the width as needed */
  height: 300px; /* Fixed height for all book items */
  margin-right: 20px; /* Adjust the spacing between books as needed */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio within the fixed height */
`;

const PreviewButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${BookItem}:hover & {
    opacity: 1;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;

  ${(props) => (props.direction === "next" ? "right: 10px;" : "left: 10px;")}
`;

const BookCarousel = () => {
  const { books, category } = useContext(BookContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex + 5 < books.works.length ? currentIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex > 0 ? currentIndex - 1 : books.works.length - 5
    );
  };
  if (!books) return;
  return (
    <div>
      <h1>{String(category).toLocaleUpperCase()} Books</h1>
      <CarouselContainer>
        <NavigationButton direction="prev" onClick={prevSlide}>
          &lt;
        </NavigationButton>
        <CarouselTrack
          style={{ transform: `translateX(${-currentIndex * 220}px)` }}
        >
          {books?.works
            ?.slice(currentIndex, currentIndex + 5)
            .map((book, index) => (
              <Link
                state={{ book: book }}
                to={`/book/${book.cover_edition_key}`}
              >
                <BookItem key={index}>
                  <BookImage
                    src={getImageURL(book.cover_id)}
                    alt={book.title}
                  />
                  <PreviewButton>Preview</PreviewButton>
                </BookItem>
              </Link>
            ))}
        </CarouselTrack>
        <NavigationButton direction="next" onClick={nextSlide}>
          &gt;
        </NavigationButton>
      </CarouselContainer>
    </div>
  );
};

export default BookCarousel;
