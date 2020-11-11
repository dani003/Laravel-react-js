import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoLaboratorio from './../secondary/GestionLaboratorio/CrearNuevoLaboratorio.js';
import TablaLaboratorios from './../secondary/GestionLaboratorio/TablaLaboratorios.js';


class GestionLaboratorio extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <TablaLaboratorios></TablaLaboratorios>
      </div>
    );
  }
}
export default GestionLaboratorio;
