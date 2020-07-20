import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";
import Fruit from "./Fruit";

const ItemDetails = () => {
  const params = useParams();
  let fruitSelected = [];
  for (let i in items) {
    fruitSelected.push(items[i]);
  }
  let fruit = fruitSelected.filter((element) => {
    return element.id === params.itemId;
  });

  return <Fruit fruit={fruit} />;
};

export default ItemDetails;
