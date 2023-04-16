import { useState } from 'react';
import './App.css';
import Header from "./Componentes/Header/header.js"
import Formulario from './Componentes/formulario/formulario.js';
import MiOrg from './Componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(true)

  // Ternario --> "condicion ? seMuestra : noSeMuestra"

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>     
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <></> }
     
      <MiOrg cambiarMostrar={cambiarMostrar}  />
    </div>
  );
}

export default App;
