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
  max-width: 400px;
  height: 400px;
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

  const { book } = location?.state;

  return (
    <BookDetailContainer>
      <BookImage src={getImageURL(book.cover_id)} alt={book.title} />
      <DetailsContainer>
        <Title>{book.title}</Title>
        <DetailItem>First Publish Year: {book.first_publish_year}</DetailItem>
        <DetailItem>
          Author(s): {book.authors?.map((author) => author.name).join(", ")}
        </DetailItem>
        <DetailItem>Categories: {book.subject.join(", ")}</DetailItem>
        <PriceLink
          href={"https://www.amazon.com/example-book"}
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
