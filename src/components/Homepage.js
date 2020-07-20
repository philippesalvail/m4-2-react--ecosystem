import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";

function Homepage(props) {
  return (
    <div>
      <SubTitle>
        Fruit emporium sells the finest fruits from this world and beyond.
      </SubTitle>
      <BrowseTitle>Browse Items:</BrowseTitle>
      <FruitList>
        <ListingGrid />
      </FruitList>
    </div>
  );
}

const FruitList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2%;
`;
const SubTitle = styled.div`
  font-family: Sans-serif;
  font-size: 1.25em;
`;
const BrowseTitle = styled(SubTitle)`
  margin-top: 3%;
  font-weight: bold;
`;

export default Homepage;
