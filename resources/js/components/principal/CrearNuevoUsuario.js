import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoUsuarioForm from './../secondary/CrearNuevoUsuario/CrearNuevoUsuarioForm.js';



class CrearNuevoUsuario extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <CrearNuevoUsuarioForm></CrearNuevoUsuarioForm>
      </div>
    );
  }
}
export default CrearNuevoUsuario;
