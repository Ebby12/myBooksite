// BookDetail.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getBookDetailURL, getImageURL } from "../resources/constants";

const BookDetailContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;

const BookImage = styled.img`
  max-width: 200px;
  height: auto;
  margin-right: 20px;
`;

const DetailsContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const PriceLink = styled.a`
  display: inline-block;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
`;

const BookDetail = () => {
  const path = window.location.href.split("/");
  const id = path[path?.length - 1];
  const location = useLocation();

  const { book: x } = location?.state;
  console.log(x);

  const book = {
    title: "Book Title",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    publishDate: "January 1, 2023",
    publisher: "Publisher Name",
    language: "English",
    pages: 300,
    categories: ["Fiction", "Mystery"],
    priceAmazon: "https://www.amazon.com/example-book",
  };

  return (
    <BookDetailContainer>
      <BookImage src={getImageURL(x.cover_id)} alt={x.title} />
      <DetailsContainer>
        <Title>{x.title}</Title>
        <Rating>Rating: {book.rating}</Rating>
        <DetailItem>First Publish Year: {x.first_publish_year}</DetailItem>
        <DetailItem>Publisher: {book.publisher}</DetailItem>
        <DetailItem>Language: {book.language}</DetailItem>
        <DetailItem>Pages: {book.pages}</DetailItem>
        <DetailItem>Categories: {x.subject.join(", ")}</DetailItem>
        <PriceLink
          href={book.priceAmazon}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Price on Amazon
        </PriceLink>
      </DetailsContainer>
    </BookDetailContainer>
  );
};

export default BookDetail;
