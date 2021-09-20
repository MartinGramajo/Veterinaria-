import React from "react";
import "./cita.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

export default function Cita({ cita, handleDelete }) {
  return (
    <div
      className="container d-flex flex-wrap justify-content-between card fondo "
      style={{
        width: "400px",
        borderRadius: "10px",
      }}
    >
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
              size="sm"> <FontAwesomeIcon icon={faUserMinus} /> Eliminar cita</Button>
    </div>
  );
}
