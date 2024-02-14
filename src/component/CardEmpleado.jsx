import React from "react";
import { Card } from "react-bootstrap";
import ImgEmpleado from "./ImgEmpleado";
import "bootstrap/dist/css/bootstrap.min.css";

const cardEmpleado = ({empleadoNombre,empleadoTitulo, empleadoDepartamento, empleadoImg }) => {
  return (
    <article className="d-flex flex-column my-1">
      <Card className="border-top border-bottom">
        <Card.Body className="d-flex justify-content-around align-items-center">
          <ImgEmpleado empleadoImg={empleadoImg}></ImgEmpleado>
          <blockquote className="blockquote mb-0">
            <h3>{empleadoNombre}</h3>
            <footer>
                <div className="d-flex">
              <h4>{empleadoTitulo}</h4> 
              <h5 className="mx-3">{empleadoDepartamento}</h5>
                </div>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </article>
  );
};

export default cardEmpleado;
