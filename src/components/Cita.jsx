import React from "react";
import "./cita.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

export default function Cita({ cita, handleDelete }) {
  return (
    <div
      className="container d-flex flex-wrap justify-content-between card fondo my-5 "
      style={{
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <p>
      <strong>Mascota:</strong> {cita.mascota} 
      </p>
      <p>
      <strong>Dueño:</strong> {cita.propietario} 
      </p>
      <p>
      <strong> Fecha:</strong> {cita.fecha} 
      </p>
      <p>
      <strong>Hora:</strong> {cita.hora} 
      </p>
      <p>
      <strong>Sintomas:</strong> {cita.sintomas}
      </p>
          <Button
              onClick={() => handleDelete
              (cita.id)} variant="danger"
              size="sm"> <FontAwesomeIcon icon={faUserMinus} /> Eliminar cita</Button>
    </div>
  );
}
