import "./formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../lista opciones";
import Boton from "../Boton"

const Formulario = () => {

    const manejarEvento = (e) =>{
        e.preventDefault();
        console.log("manejar el evento" , e)
        
    }


   return <section className="formulario">
    <form onSubmit={manejarEvento}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
        <ListaOpciones />
        <Boton texto="Crear" />
    </form>
   </section> 
}

export default Formulario