import { useState } from "react";
import "./formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../lista opciones";
import Boton from "../Boton"

const Formulario = () => {

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const manejarEvento = (e) =>{
        e.preventDefault();
        console.log("Manejar el envio")
        const datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        
        console.log(datosAEnviar)
    }


   return <section className="formulario">
    <form onSubmit={manejarEvento}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto 
            titulo="Nombre"
            placeholder="Ingresar nombre" 
            required 
            valor={nombre}
            actualizarValor={actualizarNombre}
           />

        <CampoTexto 
        titulo="Puesto" 
        placeholder="Ingresar puesto" 
        required 
        valor={puesto}
        actualizarValor={actualizarPuesto}
        />

        <CampoTexto
         titulo="Foto"
          placeholder="Ingresar enlace de foto" 
          required
          valor={foto}
          actualizarValor={actualizarFoto}
           />
        <ListaOpciones
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
         />
        <Boton 
        texto="Crear"
         />
    </form>
   </section> 
}

export default Formulario