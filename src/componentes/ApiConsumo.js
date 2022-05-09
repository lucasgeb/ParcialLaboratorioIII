import React, { Component } from "react";
import Colores from "./Colores";
import './style.css';

//Creación de Componente de clase. 
export default class ApiConsumo extends Component {
  //inicializo el estado con un arreglo vacio despues hay que "llenarlo" / actualizarlo con la info que llegue de la API.
  state = {
    colores: [],
  };

  //Petición a la API dentro del metodo componentDidMount(), me devuelve un Objeto.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
    .then((res) => {
      return res.json();
    })
    .then((data)=>{
      this.setState ({colores:data});
      console.log(data)


    })}


  //Renderizo los elemento.s
  render() {
    return (
      <>
        <h2 className="card2" >
          Lista de Colores
        </h2>
        {this.state.colores.length === 0 ? (
            <h3>Cargando...</h3>
        ):(
            this.state.colores.map((element) => (
                <Colores key={element.id} title={element.title} thumnbail={element.thumbnailUrl}/>
            ))
        )}


      </>
    );
  }
}
