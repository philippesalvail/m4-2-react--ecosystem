import React from "react";
import { items } from "../data";
import ListingItem from "./ListingItem";

function ListingGrid(props) {
  let result = [];
  for (let i in items) {
    result.push(items[i]);
  }
  return result.map((index) => {
    return <ListingItem item={index} />;
  });
}

export default ListingGrid;
