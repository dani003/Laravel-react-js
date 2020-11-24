import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import GestionPerfil2 from './../secondary/Perfil/GestionPerfil2.js';




class Perfil extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <GestionPerfil2></GestionPerfil2>
        <Footer></Footer>
      </div>
    );
  }
}

export default Perfil;
