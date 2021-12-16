import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";
const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item, index) => {
        return <Item item={item} />;
      })}
    </>
  );
};

export default ItemList;
