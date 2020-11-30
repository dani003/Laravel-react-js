import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import HistorialUsuario2 from './../secondary/Perfil/HistorialUsuario2.js';


class PerfilHistorial extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <HistorialUsuario2></HistorialUsuario2>
      </div>
    );
  }
}
export default PerfilHistorial;
