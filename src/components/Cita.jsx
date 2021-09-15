import React from "react";
import "./cita.css";
import { Button } from "react-bootstrap";

export default function Cita({ cita, handleDelete }) {
  return (
    <div
      className="container  text-white d-flex flex-wrap justify-content-between card mx-auto text-center p-4 my-5 fs-5 border-dark border-3 fondo "
      style={{
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <p className="fs-1 mx-5 ">Datos</p>
      <p>
        Mascota: {cita.mascota} <span></span>
      </p>
      <p>
        Dueño: {cita.propietario} <span></span>
      </p>
      <p>
        Fecha: {cita.fecha} <span></span>
      </p>
      <p>
        Hora: {cita.hora} <span></span>
      </p>
      <p>
        Sintomas: {cita.sintomas} <span></span>
      </p>
          <Button
              onClick={() => handleDelete
              (cita.id)} variant="danger"
              size="sm"> Eliminar cita</Button>
    </div>
  );
}
