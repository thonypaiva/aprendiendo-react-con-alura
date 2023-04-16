import { useState } from "react"
import "../campoTexto/campotexto.css"

const CampoTexto = (props) => {
    const placeHolderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeHolderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />

    </div>
}

export default CampoTexto