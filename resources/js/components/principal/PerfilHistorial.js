import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import HistorialUsuario from './../secondary/Perfil/HistorialUsuario.js';


class PerfilHistorial extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <HistorialUsuario></HistorialUsuario>
      </div>
    );
  }
}
export default PerfilHistorial;
