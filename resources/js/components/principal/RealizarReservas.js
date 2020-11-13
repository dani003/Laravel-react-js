import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import ReservaLibre from './../secondary/RealizarReservas/ReservaLibre.js';


class RealizarReserva extends Component {
  render() {
    return (
      <div>
          <TopBar></TopBar>
          <MenuBar></MenuBar>
          <ReservaLibre></ReservaLibre>
      </div>
    );
  }
}
export default RealizarReserva;
