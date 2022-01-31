import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContexto } from "../components/miContexto";
import { db } from "../components/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
const Cart = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    carrito,
    borrarDelCarrito,
    limpiarCarrito,
    preciototal,
    usuarioLogueado,
    logout,
    productoAgregado,
  } = useContexto();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/espumantes");
    } catch (error) {
      console.log(error.message);
    }
  };

  const finalizarCompra = (data) => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      buyer: {
        name: `${usuarioLogueado.displayName}`,
        phone: "",
        mail: `${usuarioLogueado.email}`,
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
      <Container className="bg-white carrito">
        {error && <p className="error">{error}</p>}
        <h3 className="text-success text-center">{usuarioLogueado.email}</h3>
        <h3 className="text-success text-center">este es tu carro</h3>
        <Button className="btn-success" onClick={handleLogout}>
          Cerrar sesion
        </Button>
        <Row>
          <Col xs={12} sm={8} className="pe-3 ps-3">
            {carrito.map((producto, index) => {
              return (
                <Col key={index}>
                  <Container className="borderinferior">
                    <Row className="">
                      <Col xs={6} sm={5} className="text-end">
                        <img src={producto.img} alt={producto.marca} />
                      </Col>
                      <Col xs={6} sm={7} className=" mt-3 datosproducto">
                        <p>
                          {producto.name} {producto.marca} {producto.tipo}{" "}
                          {producto.varietal}
                          <br />
                          Cantidad:<strong>{producto.cantidad}</strong>
                          <br />
                          Precio:<strong>${producto.precio}</strong>
                        </p>

                        <Button
                          onClick={() => {
                            borrarDelCarrito(
                              producto.id,
                              producto.cantidad,
                              producto.cantidad * producto.precio
                            );
                          }}
                          variant="outline-danger"
                        >
                          <FaRegTrashAlt />
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              );
            })}
          </Col>
          <Col xs={12} sm={4} className="border-start border-success">
            <Container className="text-center">
              <Row>
                <Col>
                  <p className="text-dark datosproducto">
                    Precio Total de la Compra: <strong>${preciototal} </strong>
                  </p>
                  <Link to="/Productos">
                    <Button className="m-1 w-100" variant="outline-primary">
                      Seguir Comprando
                    </Button>
                  </Link>
                  <Button
                    className="m-1 w-100"
                    onClick={limpiarCarrito}
                    variant="outline-danger"
                  >
                    Borrar el carro
                  </Button>
                  <Button
                    className="m-1 w-100"
                    onClick={() => {
                      finalizarCompra(carrito, usuarioLogueado);
                    }}
                    variant="outline-success"
                  >
                    Finalizar Compra
                  </Button>
                </Col>
              </Row>
            </Container>
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
