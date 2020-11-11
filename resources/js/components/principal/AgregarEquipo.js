import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoEquipo from './../secondary/GestionEquipo/CrearNuevoEquipo.js';



class AgregarEquipo extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <CrearNuevoEquipo></CrearNuevoEquipo>
      </div>
    );
  }
}
export default AgregarEquipo;
