import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  <title>La Bodega de Willy - Venta de Vinos - Destilados - Espumantes</title>;

  return (
    <Container fluid>
      <section id="video" className="banner ">
        <video autoPlay muted loop>
          <source
            src="/assets/images/videos/video_vino_1.mp4"
            type="video/mp4"
            alt="video de presentación"
          />
        </video>
        <div className="contenido_video">
          <h2>
            Llevamos las mejores bebidas <br />
            <span>directo a tu casa.</span>{" "}
          </h2>
          <h3>Vinos - Espumantes - Destilados</h3>
        </div>
      </section>
      <section className="" id="productos">
        <div className="row justify-content-center justify-content-sm-between tarjetas">
          <div className="row py-3 row-cols-1 row-cols-md-3 ">
            <div className="col">
              <div className="card">
                <img
                  src="/assets/images/portadas/tarjetar-vinos1.jpg"
                  className="img-fluid"
                  alt="Ir a sección de Vinos"
                />
                <div className="card-img-overlay ">
                  <h5 className="ms-2 ">
                    <Link to="/categoria/vinos" className="links">
                      Espumantes
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mt-2 mt-sm-0 mb-2 mb-sm-0 ">
                <img
                  src="/assets/images/portadas/tarjeta-espumantes1.jpg"
                  className="img-fluid"
                  alt="Ir a sección de Espumantes"
                />
                <div className="card-img-overlay ">
                  <h5 className="ms-2 ">
                    <Link to="/categoria/espumantes" className="links">
                      Espumantes
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <img
                  src="/assets/images/portadas/tarjeta-destilados1.jpg"
                  className="img-fluid"
                  alt="Ir a Sección de Destilados"
                />
                <div className="card-img-overlay ">
                  <h5 className="ms-2 ">
                    <Link to="/categoria/espumantes" className="links">
                      Destilados
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
