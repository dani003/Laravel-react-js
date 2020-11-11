import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoEquipo from './../secondary/GestionEquipo/CrearNuevoEquipo.js';
import TablaEquipos from './../secondary/GestionEquipo/TablaEquipos.js';



class GestionEquipo extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <TablaEquipos></TablaEquipos>
      </div>
    );
  }
}
export default GestionEquipo;
