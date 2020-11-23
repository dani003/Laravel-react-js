import React, { Component } from 'react';
import SearchBar from 'react-js-search';
import { Link } from "react-router-dom";
import Usuario from './Usuario.js';
import AdminUsuario from './AdminUsuario.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class CrearUsuario extends Component {

    constructor(props) {
        super(props);

        this.state = {
          email: cookies.get('email')
        };
      }

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
          <AdminUsuario></AdminUsuario>
      </div>
      <Usuario></Usuario>
    </div>
    );
  }
}

export default CrearUsuario;
