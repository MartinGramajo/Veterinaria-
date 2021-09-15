
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import Title from './components/Title';
import FormularioCitas from './components/FormularioPacientes';

function App() {

  // Arreglo de citas 
  const [citas, setCitas] = useState([]);

  // Funcion que tome las citas actuales y agregue la nueva 

  const crearCita = cita => {
    console.log(cita)
  }

  return (
    <Fragment>
      <Title />
      <FormularioCitas
        crearCita={crearCita}
      />
    </Fragment>
  );
}

export default App;
