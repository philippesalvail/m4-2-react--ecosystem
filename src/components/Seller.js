import React from "react";
import { sellers } from "../data";
import styled from "styled-components";

function Seller(props) {
  let owners = [];
  for (let i in sellers) {
    owners.push(sellers[i]);
  }
  let ownerSelected = owners.filter((element) => {
    return element.id === props.sellerId;
  });

  return (
    <ImgAndStoreName>
      <OwnerImage src={ownerSelected[0].avatarSrc} />
      <OwnerStoreName>
        Sold by: <b>{ownerSelected[0].storeName}</b>
      </OwnerStoreName>
    </ImgAndStoreName>
  );
}
const ImgAndStoreName = styled.div`
  margin-top: 5%;
  display: flex;
`;

const OwnerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
const OwnerStoreName = styled.p`
  display: inline;
  margin-left: 2%;
`;

export default Seller;
