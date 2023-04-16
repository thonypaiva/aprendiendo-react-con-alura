import "./formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../lista opciones";
import Boton from "../Boton"

const Formulario = () => {

    const manejarEvento = (e) =>{
        e.preventDefault();
        console.log("manejar el envio" , e)
        
    }


   return <section className="formulario">
    <form onSubmit={manejarEvento}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
        <ListaOpciones />
        <Boton texto="Crear" />
    </form>
   </section> 
}

export default Formulario