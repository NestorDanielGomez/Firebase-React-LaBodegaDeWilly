import React from "react";
import Item from "../itemlist/Item";
import { Container, Row } from "react-bootstrap";
const ItemList = ({ list }) => {
  return (
    <Row xs={12} sm={6} className=" g-3 justify-content-center pt-3 pb-3">
      {list.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </Row>
  );
};

export default ItemList;
