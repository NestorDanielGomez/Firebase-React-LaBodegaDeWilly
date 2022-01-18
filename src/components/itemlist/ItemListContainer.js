import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import ItemList from "../itemlist/ItemList";
import "../itemlist/ItemListContainer.css";
import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

console.log(db);

const ItemListContainer = ({ saludo }) => {
  const [list, setList] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");

    //pedirProductos()

    if (nombre) {
      const consulta = query(
        productosCollection,
        where("categoria", "==", nombre)
      );
      /* await */ getDocs(consulta)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(productosCollection)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /* let promesa
        if (nombre) {
            console.log("Productos por categoria")
            promesa = fetch(`https://fakestoreapi.com/products/category/${nombre}`)
        } else {
            console.log("Todos los productos")
            promesa = fetch('https://fakestoreapi.com/products')
        }
        promesa
            .then(res => res.json())
            .then((productos) => {
                setLista(productos)
            }) */
  }, [nombre]);

  // const promesa = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     if (!id) {
  //       res(productosDb);
  //     } else {
  //       // console.log(productosDb);
  //       res(productosDb.filter((producto) => producto.filtro === id));
  //     }
  //   }, 1000);
  // });

  // promesa
  //   .then((data) => {
  //     setList(data);
  //   })
  //   .catch(() => {
  //     console.log("ocurrio un error");
  //   });

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
