import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const sidebarConfig = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/categories",
  },
];

const isActivePath = (currentPath, path) => {
  if (path === "/") {
    return currentPath === path;
  }
  return currentPath.startsWith(path);
};

function Header() {
  const { pathname } = useLocation();
  const navigator = useNavigate();

  return (
    <MenuWrapper>
      <Logo
        onClick={() => navigator("/")}
        src="https://t4.ftcdn.net/jpg/04/09/86/45/360_F_409864514_22BSaAnubdKn2V979WmVIuoIXYXtM3XF.jpg"
      />
      <>
        <MenuList>
          {sidebarConfig.map((entry, id) => {
            return (
              <MenuItem key={entry.path}>
                <Link
                  to={entry.path}
                  style={{
                    color: isActivePath(pathname, entry.path) && "#C2A374",
                  }}
                >
                  <li key={id}>
                    <div>{entry.name}</div>
                  </li>
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
        <SearchWrapper>
          <SearchInput />
          <SearchImage src="https://openlibrary.org/static/images/search-icon.svg" />
        </SearchWrapper>
      </>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.nav`
  display: flex;
  background-color: #1c2439;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 1em;
  justify-content: space-between;
  padding-right: 3em;
`;

const MenuItem = styled.li``;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 1em;
  gap: 1em;
  justify-content: center;
  color: #fff;
`;

const Logo = styled.img`
  width: 6rem;
  cursor: pointer;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  line-height: 1.4;
  border: none;
  background: none;
  height: 55px;
  width: 100%;
  cursor: pointer;
  transition: background-color 150ms ease;
  padding: 16px 27px;
  margin-bottom: 30px;

  &.active {
    background: #ffa;
    box-shadow: green;
    border-radius: 8px;
    color: #ffffff;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-self: center;
  background-color: #fff;
  padding: 5px;
  border-radius: 20px;
`;
const SearchInput = styled.input`
  outline: 0;
  border: 0;
  -webkit-appearance: none;
`;
const SearchImage = styled.img`
  margin-right: 5px;
`;

export default Header;
