
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import Title from './components/Title';
import FormularioCitas from './components/FormularioPacientes';
import Title2 from './components/Title2';
import Cita from './components/Cita';

function App() {

  // Arreglo de citas 
  const [citas, setCitas] = useState([]);
  console.log("file: App.js ~ line 12 ~ App ~ citas", citas)

  // Funcion que tome las citas actuales y agregue la nueva 

  const crearCita = cita => {
    setCitas([...citas, cita
    ])
  }

  return (
    <Fragment>
      <Title />
      <FormularioCitas
        crearCita={crearCita}
      />
      <Title2 />
      <div className="container d-flex flex-wrap justify-content-between">
        {citas.map((cita) => (
          <Cita
            key={cita.id}
            cita={cita}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
