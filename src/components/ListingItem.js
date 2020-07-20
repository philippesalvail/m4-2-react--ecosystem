import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ListingItem(props) {
  const { imageSrc, name, latinName, id } = props.item;
  return (
    <MainFruitImage>
      <div>
        <FruitImage src={imageSrc} />
        <FruitName>
          <StyledLink to={`/items/${id}`}>{name}</StyledLink>
        </FruitName>
        <BorderLine></BorderLine>
        <FruitDesc>{latinName}</FruitDesc>
      </div>
    </MainFruitImage>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: Black;
`;

const FruitName = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const FruitDesc = styled.p`
  font-style: italic;
  font-size: 1.5em;
  color: grey;
`;

const BorderLine = styled.div`
  width: 75%;
  background-color: grey;
  height: 10px;
  margin: 0 auto;
  border-radius: 50%;
`;

const MainFruitImage = styled.div`
  position: relative;
  text-align: center;
  border-radius: 25px;
  background-color: WhiteSmoke;
  margin: 5%;
`;

const FruitImage = styled.img`
  border-radius: 25px;
  width: 75%;
`;

export default ListingItem;
