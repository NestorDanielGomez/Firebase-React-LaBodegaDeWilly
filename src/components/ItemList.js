import React from "react";
import Item from "./Item";
const ItemList = ({ list }) => {
  return (
    <>
      {list.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </>
  );
};

export default ItemList;
