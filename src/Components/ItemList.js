import React from "react";
import Item from "./Item";
const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </>
  );
};

export default ItemList;
