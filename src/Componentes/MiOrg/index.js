import { useState } from "react"
import "./miorg.css"

const MiOrg = (props) =>{

    //Estado - hooks
    //useState
    //usestate()
    //const [nombreVariable, functionActualiza] = useState(valorInicial)

    //const [mostar,actualizarMostrar] = useState(true)

    //const manejarClik = () =>{
    //    console.log("mostrar/ocultar elemento" , mostar)
    //    actualizarMostrar()
    //}


    return <section className="orgSection">
        <h3  className="title">Mi Organizacion</h3>
        <img   src="img/agregar.png" alt="icono para agregar" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg