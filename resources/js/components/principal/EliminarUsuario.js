import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import EliminarUsuarioForm from './../secondary/EliminarUsuario/EliminarUsuarioForm.js';



class EliminarUsuario extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <EliminarUsuarioForm></EliminarUsuarioForm>
      </div>
    );
  }
}
export default EliminarUsuario;
