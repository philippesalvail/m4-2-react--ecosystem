import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader className="mainTitle">
      <Title className="mainTitle-Fruit">Fruit Emporium</Title>
      <LinkGroup className="mainTitle-Links">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </LinkGroup>
    </MainHeader>
  );
};

const LinkGroup = styled.div`
  display: inline;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: bold;
  margin-left: 20px;

  &::after {
    border-top: 0.1em solid #2f56b0;
    content: "";
    position: absolute;
    right: 100%;
    bottom: -1px;
    left: 0;
    font-weight: bold;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
  }

  &:hover {
    text-decoration: none;
  }
  &:hover::after {
    font-size: 30px;
    right: 0;
  }
`;
const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3%;
`;
export default Header;
