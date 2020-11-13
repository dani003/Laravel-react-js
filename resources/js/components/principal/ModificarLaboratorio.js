import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import ModificarLaboratorioForm from './../secondary/GestionLaboratorio/ModificarLaboratorioForm.js';



class ModificarLaboratorio extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <ModificarLaboratorioForm></ModificarLaboratorioForm>
      </div>
    );
  }
}
export default ModificarLaboratorio;
