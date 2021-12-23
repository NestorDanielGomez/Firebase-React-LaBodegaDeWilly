import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import productosDb from "../data/productos.json";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (!id) {
          res(productosDb);
        } else {
          console.log(productosDb);
          res(productosDb.filter((producto) => producto.filtro === id));
        }
      }, 2000);
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
          <h2>Bienvenido {saludo}</h2>
          <h4>Cargando Productos</h4>s
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
