import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuBar extends Component {
  render() {
    return (
      <div className='navBarboxN ZIndex'>
      <nav class="bp3-navbar bp3-dark">
        <div styles={{ card: { backgroundColor: 'red' }}}>
          <div class="bp3-navbar-group bp3-align-left">
          </div>
          <div class="bp3-navbar-group bp3-align-left">
            <Link  to="/" className="homecolor">
            <button class="bp3-button bp3-minimal bp3-icon-home">Inicio</button>
            </Link>
            <Link  to="/ListaUsuarios" className="homecolor">
            <button class="bp3-button bp3-minimal  bp3-icon-people">Usuarios</button>
            </Link>
            <Link  to="/Perfil" className="homecolor" >
            <button class="bp3-button bp3-minimal bp3-icon-user">Perfil</button>
            </Link>
            <Link  to="/" className="homecolor" >
            <button class="bp3-button bp3-minimal bp3-icon-layout-auto">Noticias</button>
            </Link>
          </div>
          <div class="bp3-navbar-group bp3-align-right">
            <span class="bp3-navbar-divider"></span>
            <Link to="/Login">
            <button class="bp3-button bp3-minimal bp3-icon-log-out"></button>
            </Link>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default MenuBar;
//segunda barra superior. Este es el menu para las opciones.
//en el extreno izquierdo tiene inicio, usuarios, perfil; en el extremo derecho tiene la imagen de perfil y la opcion de salir
