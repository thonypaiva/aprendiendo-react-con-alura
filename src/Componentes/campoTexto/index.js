import "../campoTexto/campotexto.css"

const CampoTexto = (props) =>{
    console.log("Datos: ", props)
    const placeHolderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeHolderModificado} required={props.required} />
        
    </div>
}

export default CampoTexto