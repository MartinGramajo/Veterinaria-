
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Title from './components/Title';
import FormularioCitas from './components/FormularioPacientes';

function App() {
  return (
    <Fragment>
      <Title />
      <FormularioCitas />
    </Fragment>
  );
}

export default App;
