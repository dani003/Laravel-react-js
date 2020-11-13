import React, { Component } from 'react';
import SearchBar from 'react-js-search';
import { Link } from "react-router-dom";
import Usuario from './Usuario.js';

class CrearUsuario extends Component {
  render() {
    return (
      <div className='CrearUsuarioBox'>
          <div class="bp3-navbar BarraTituloUsuarios">
            <div class="bp3-navbar-group bp3-align-left ">
              <div><h2>Lista de Usuarios </h2></div>
            </div>
            <div class="bp3-navbar-group bp3-align-right">
              <span class="bp3-navbar-divider"></span>
              <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
            </div>
          </div>
      <div className=" bp3-card bp3-interactive bp3-elevation-3 CrearUsuarioCard">
      <div className='CrearUsuarioInfo'>
      <label class="bp3-label" for="form-group-input">
        Buscar Usuario:
      </label>
          <div class="bp3-input-group barraBuscar">
            <span class="bp3-icon bp3-icon-search CrearUsuarioSearch"></span>
            <input type="text" class="bp3-input"  placeholder="Search" />
            <button class="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
          </div>
      </div>
      <div class='botonesAdminUsuario'>
          <Link to="/CrearNuevoUsuario">
              <button type="button" class="bp3-button bp3-icon-add  bp3-intent-success botonGestionUsuario">Crear Usuario</button>
          </Link>
          <Link to="/EliminarUsuario">
              <button type="button" class="bp3-button bp3-icon-add bp3-intent-success botonGestionUsuario">Eliminar Usuario</button>
          </Link>


      </div>
      </div>
      <Usuario></Usuario>
      </div>
    );
  }
}

export default CrearUsuario;
