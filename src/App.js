/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState, useEffect } from 'react';
import Title from './components/Title';
import FormularioCitas from './components/FormularioPacientes';
import Cita from './components/Cita';

function App() {

  // Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas 
  const [citas, setCitas] = useState(citasIniciales);

  // use Effect para realizar ciertas operaciones cuando el esta cambia 
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas])

  // Funcion que tome las citas actuales y agregue la nueva 

  const crearCita = cita => {
    setCitas([...citas, cita
    ])
  }

  //Funcion para eliminar una cita por su id

  const handleDelete = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    if (citas.id !== id) {
      setCitas(nuevasCitas);
    }
  }

  //Mensaje condicional 
  const titulo = citas.length === 0 ? "no hay citas" : 'Administras tus citas'

  return (
    <Fragment>
      <Title />
      <FormularioCitas
        crearCita={crearCita}
      />
      <h1 className="container text-center text-white font-weight-bold  fs-0 mt-5"> {titulo} </h1>
      <div className="container d-flex flex-wrap justify-content-between">
        {citas.map((cita) => (
          <Cita
            handleDelete={handleDelete}
            key={cita.id}
            cita={cita}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
