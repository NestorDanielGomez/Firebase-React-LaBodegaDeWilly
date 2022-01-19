import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContexto } from "../components/miContexto";
import { db } from "../components/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { carrito, borrarDelCarrito, limpiarCarrito, preciototal } =
    useContexto();

  const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      buyer: {
        name: "Nestor Gomez",
        phone: 34823185620,
        mail: "nestor@mail.com",
      },
      items: carrito.map((prod) => {
        return {
          name: prod.name,
          precio: prod.precio,
          cantidad: prod.cantidad,
        };
      }),
      date: serverTimestamp(),
      total: preciototal,
    })
      .then((res) => {
        alert(`tu compra tiene el numero de seguimiento ${res.id}`);
        limpiarCarrito();
      })
      .catch((err) => console.log(err));
  };

  if (carrito.length > 0) {
    return (
      <Container className="bg-white">
        <h3 className="text-success text-center">Su carro de compras</h3>
        {carrito.map((producto, indice) => {
          return (
            <Row key={indice}>
              <Col>
                <img src={producto.img} alt={producto.marca} />
              </Col>
              <Col>
                <h4>Bebida:{producto.name}</h4>
                <h4>Marca:{producto.marca}</h4>
                <h4>Tipo:{producto.tipo}</h4>
                <h4>Varietal:{producto.varietal}</h4>
                <h4>cantidad:{producto.cantidad}</h4>
                <h4>precio:${producto.precio}</h4>
                <Button
                  onClick={() => {
                    borrarDelCarrito(
                      producto.id,
                      producto.cantidad,
                      producto.cantidad * producto.precio
                    );
                  }}
                >
                  Eliminar del carro
                </Button>
              </Col>
            </Row>
          );
        })}

        <Row className="text-center">
          <Col className="m-2">
            <h3 className="text-dark">Total de la Compra: ${preciototal} </h3>
            <Link to="/Productos" className="m-1 btn btn-info text-center">
              Seguir Comprando
            </Link>
            <Button className="ms-2" onClick={limpiarCarrito}>
              Borrar el carro
            </Button>
            <Button className="ms-2" onClick={finalizarCompra}>
              Finalizar Compra
            </Button>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <h3 className="text-white text-center">Su carro esta vacio</h3>
          </Col>
          <Link to="/Productos" className="m-1 btn btn-info text-center">
            Ir a comprar
          </Link>
        </Row>
      </Container>
    );
  }
};
export default Cart;
