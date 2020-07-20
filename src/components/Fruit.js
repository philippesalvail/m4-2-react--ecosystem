import React from "react";
import styled from "styled-components";
import Seller from "./Seller";
function Fruit(props) {
  const {
    id,
    name,
    latinName,
    description,
    imageSrc,
    countryOfOrigin,
    price,
    quantity,
    sellerId,
  } = props.fruit[0];
  let message = quantity > 0 ? "Buy Now" : "Out Of Stock";
  return (
    <FruitInfo>
      <FruitImage>
        <Picture src={imageSrc} />
      </FruitImage>
      <FruitDetail>
        <div>
          <FruitDetailName>{name}</FruitDetailName>
          <FruitDetailLatinDesc>{latinName}</FruitDetailLatinDesc>
        </div>
        <div>
          <FruitDescription>{description}</FruitDescription>
          <Origin>
            Product of <strong>{countryOfOrigin}</strong>
          </Origin>
        </div>
        <PurchaseButton
          disabled={quantity > 0 ? false : true}
          style={{ opacity: quantity > 0 ? 1 : 0.5 }}
        >
          ${price} - {message}
        </PurchaseButton>
        <Seller sellerId={sellerId} />
      </FruitDetail>
    </FruitInfo>
  );
}
// const Seller = styled.div``;

const PurchaseButton = styled.button`
  margin-top: 5%;
  width: 50%;
  height: 50px;
  font-size: 1.25em;
  background-color: blue;
  border-radius: 10px;
  color: white;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Origin = styled.p`
  font-style: italic;
  margin-bottom: 0;
  font-size: 1.25em;
`;

const FruitDescription = styled.p`
  font-size: 1.25em;
  margin: 0;
`;

const FruitInfo = styled.div`
  display: flex;
`;
const FruitImage = styled.div`
  flex: 1;
`;
const Picture = styled.img`
  border-radius: 25px;
  width: 90%;
`;

const FruitDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const FruitDetailName = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
`;

const FruitDetailLatinDesc = styled.p`
  font-style: italic;
  font-size: 1.5em;
  color: grey;
  margin-top: 0;
`;

export default Fruit;
