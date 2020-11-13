import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import ModificarEquipoForm from './../secondary/GestionEquipo/ModificarEquipoForm.js';



class ModificarEquipo extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <ModificarEquipoForm></ModificarEquipoForm>
      </div>
    );
  }
}
export default ModificarEquipo;
