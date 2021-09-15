import { useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

export default function FormExample() {
  // state de validacion
  const [validated, setValidated] = useState(false);

  // state de citas
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  console.log(cita)
  // Funcion que se ejecuta cada que el usuario escribe en un  input
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // cuando el usuario presiona  el enviar cita
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    //validar
    if (form.checkValidity() === true) {
      event.stopPropagation();

      //eliminar el msj de validacion
      setValidated(false);
      
      //asignar un ID
      cita.id = uuidv4();

      // crear una cita 
      
      //Reiniciar el form
    } else {
      setValidated(true)
    }

  };

  return (
    <Form
      className="card mx-auto p-5"
      style={{ width: "700px" }}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-3">
        <Form.Group controlId="validationCustom01">
          <Form.Label>Nombre de la Mascota</Form.Label>
          <Form.Control
            name="mascota"
            required
            type="text"
            placeholder="Ingresar nombre de la Mascota"
            onChange={handleChange}
            value={mascota}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el nombre de la mascota.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label className="mt-3">Nombre del propietario</Form.Label>
          <Form.Control
            name="propietario"
            required
            type="text"
            placeholder="Ingresar Nombre del dueño"
            onChange={handleChange}
            value={propietario}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingrese el nombre del propietario.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className="mt-1 mb-1">Fecha</Form.Label>
          <Form.Control
            name="fecha"
            type="Date"
            placeholder="dd/mm/yyyy"
            required
            onChange={handleChange}
            value={fecha}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingrese Fecha.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className="mt-1 mb-1">Hora</Form.Label>
          <Form.Control
            name="hora"
            type="Time"
            placeholder="hh:mm"
            required
            onChange={handleChange}
            value={hora}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingrese Hora.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom01">
          <Form.Label className="mt-2 mb-1">Sintomas</Form.Label>
          <Form.Control
            name="sintomas"
            required
            type="text"
            placeholder="Describir sintomas"
            onChange={handleChange}
            value={sintomas}
          />
          <Form.Control.Feedback>Campo Completo!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Datos incorrectos.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button variant="success" type="submit">
        Agregar citas
      </Button>
    </Form>
  );
}
