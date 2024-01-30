import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setBook, setCategory } from "../context/book.action";
import { BookContext } from "../context/book.context";
import { categories } from "../resources/categories";
import { getAuthorURL } from "../resources/constants";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 1em;
`;

const CategoryWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px 10px 0;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #2980b9;
  }
`;

const SubCategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 5px;
`;

const SubCategoryItem = styled.li`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BookCategories = () => {
  const navigator = useNavigate();
  const { dispatch } = useContext(BookContext);

  const handleUpdateCategory = (cat) => {
    dispatch(setCategory(cat));
    navigator("/");
  };
  return (
    <div>
      <h1>Book Categories</h1>
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryWrapper key={index}>
            <CategoryButton onClick={() => handleUpdateCategory(category)}>
              {category.name}
            </CategoryButton>
            <SubCategoryList>
              {category.subcategories.map((subcategory, subIndex) => (
                <SubCategoryItem
                  key={subIndex}
                  onClick={() => handleUpdateCategory(subcategory)}
                >
                  {subcategory}
                </SubCategoryItem>
              ))}
            </SubCategoryList>
          </CategoryWrapper>
        ))}
      </CategoryContainer>
    </div>
  );
};

export default BookCategories;
