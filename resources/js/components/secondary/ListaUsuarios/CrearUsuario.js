import React, { Component } from 'react';
import Usuario from './Usuario.js';
import SearchBar from 'react-js-search';

class CrearUsuario extends Component {
  render() {
    return (
      <div className='CrearUsuarioBox'>
      <div className="CrearUsuarioTitulo">
        <div><h2>Lista de Usuarios</h2></div>
      </div>
      <div className=" bp3-card bp3-interactive bp3-elevation-3 CrearUsuarioCard">
      <div className='CrearUsuarioInfo'>
      <label class="bp3-label" for="form-group-input">
        Buscar Usuario:
      </label>
      </div>
      <div class="bp3-input-group ">
        <span class="bp3-icon bp3-icon-search CrearUsuarioSearch"></span>
        <input type="text" class="bp3-input"  placeholder="Search" />
        <button class="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
      </div>

      </div>
      </div>
    );
  }
}

export default CrearUsuario;
