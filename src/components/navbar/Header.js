import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="">
          <span className="header__textos ">Envio Gratis - Rqta/Avda</span>
        </div>
        <div className="">
          <span className="header__textos ">
            Prohibida su venta a menores de 18 años
          </span>
        </div>

        <div className="iconos">
          <a
            href="https://instagram.com/labodegadewilly"
            target="_blank"
            rel="noopener noreferrer"
            className="lead"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/labodegadewilly"
            target="_blank"
            rel="noopener noreferrer"
            className="lead"
          >
            <FaFacebook />
          </a>

          <a
            href="https://wa.me/3482318980/?text=La%20Bodega%20de%20Willy%20-%20Disponible"
            target="_blank"
            rel="noopener noreferrer"
            className="lead"
          >
            <FaWhatsapp />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
