import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoLaboratorio from './../secondary/GestionLaboratorio/CrearNuevoLaboratorio.js';



class AgregarLaboratorio extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <CrearNuevoLaboratorio></CrearNuevoLaboratorio>
      </div>
    );
  }
}
export default AgregarLaboratorio;
