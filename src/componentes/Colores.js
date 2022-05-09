import React from "react";

//Creación de componente funcional.
function Colores(props) {
    console.log(props)
    return (
      <figure>
        <img src={props.thumnbail} alt={props.title} />
        <figcaption>{props.title}</figcaption>
      </figure>
    );
}

export default Colores;