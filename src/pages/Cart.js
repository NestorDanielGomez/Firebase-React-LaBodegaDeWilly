import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContexto } from "../components/miContexto";

const Cart = () => {
  const { carrito, borrarDelCarrito, limpiarCarrito, preciototal } =
    useContexto();

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
          <Button className="ms-2" onClick={limpiarCarrito}>
            Borrar el carro
          </Button>
          <Button className="ms-2">Finalizar Compra</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
