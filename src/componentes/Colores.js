import React from "react";

//Creación de componente funcional.
function Colores(props) {
    console.log(props)
    return (
      // <figure>
      //   <img src={props.thumnbail} alt={props.title} />
      //   c
      // </figure>
      <div className="card mx-auto" >
        <div className="card-body">
          <div className="row center">
            <div className="col-6"> 
              <img src={props.thumnbail} alt={""} className="img" />
            </div>
            <div className="col-6 Colores-Card-Info">
              <figcaption>{props.title}</figcaption>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Colores;
