import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import FormCancelarReserva from './../secondary/CancelarReservas/FormCancelarReserva.js';



class CancelarReservas extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <FormCancelarReserva></FormCancelarReserva>
      </div>
    );
  }
}
export default CancelarReservas;
