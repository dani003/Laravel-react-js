import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearUsuario from './../secondary/ListaUsuarios/CrearUsuario.js';
import Usuario from './../secondary/ListaUsuarios/Usuario.js';

class ListaUsuarios extends Component {
  render() {
    return (
      <div className="App">
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <CrearUsuario></CrearUsuario>
        <Footer></Footer>
      </div>
    );
  }
}

export default ListaUsuarios;
