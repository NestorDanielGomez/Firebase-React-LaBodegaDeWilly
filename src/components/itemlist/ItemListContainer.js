import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import productosDb from "../../data/productosDb.json";
import ItemList from "../itemlist/ItemList";
import "../itemlist/ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (!id) {
          res(productosDb);
        } else {
          // console.log(productosDb);
          res(productosDb.filter((producto) => producto.filtro === id));
        }
      }, 1000);
    });

    promesa
      .then((data) => {
        setList(data);
      })
      .catch(() => {
        console.log("ocurrio un error");
      });
  }, [id]);

  return (
    <>
      {list.length === 0 ? (
        <>
          <h4 className="text-white text-center">Cargando Productos</h4>s
        </>
      ) : (
        <Container className="listadeproductos">
          <h3 className="text-black-50">Tenemos:{list.length} productos</h3>
          <Row>
            <ItemList list={list} />
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
