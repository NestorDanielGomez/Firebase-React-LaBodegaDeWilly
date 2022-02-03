import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContexto } from "../components/miContexto";
import { db } from "../components/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
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
  } = useContexto();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/productos");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `<strong>Parece que hubo un error...</strong>`,
        html: `<b>${setError("Ocurrio un error")}</b>`,
        showConfirmButton: true,
        timer: 5000,
      });
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: `<strong>Gracias por tu compra</strong>`,
          html: `Tiene el numero de seguimiento <b>${res.id}</b>`,
          showConfirmButton: true,
          timer: 5000,
        });

        limpiarCarrito();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `<strong>Parece que hubo un error...</strong>`,
          html: `<b>${error}</b>`,
          showConfirmButton: true,
          timer: 5000,
        });
      });
  };

  if (carrito.length > 0) {
    return (
      <Container className="bg-white carrito pt-5 pb-5" fluid>
        <Row className="justify-content-center me-5">
          <Col xs={12} sm={5} className="pe-3 ps-3">
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
              {error && <p className="error">{error}</p>}
              <h5 className="text-dark text-center d-inline-block pe-2">
                Hola: {usuarioLogueado.email}
              </h5>
              <Button
                className="d-inline-block"
                variant="outline-primary"
                onClick={handleLogout}
              >
                Cerrar sesion
              </Button>

              <Row className="pt-3">
                <Col>
                  <p className="text-dark datosproducto">
                    Tu compra tiene un valor de:{" "}
                    <strong>${preciototal} </strong>
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
      <Container className="pt-5 pb-5 ">
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={9}>
            {error && <p className="error">{error}</p>}
            <h4 className="text-white text-center text-white pb-3 usuario">
              Hola: <strong>{usuarioLogueado.email}</strong>
              <Button
                className="btn ms-3"
                onClick={handleLogout}
                variant="outline-secondary"
              >
                Cerrar sesion
              </Button>
            </h4>
            <h3 className="text-white text-center pb-3">Tu carro esta vacio</h3>

            <Link to="/Productos">
              <Button
                variant="outline-secondary"
                type="submit"
                className="w-100 mb-3 align-content-center"
              >
                IR A COMPRAR
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Cart;
