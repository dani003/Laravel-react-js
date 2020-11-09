import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import FormRealizarReserva from './../secondary/RealizarReservas/FormRealizarReserva.js';


class RealizarReserva extends Component {
  render() {
    return (
      <div>
          <TopBar></TopBar>
          <MenuBar></MenuBar>
          <FormRealizarReserva></FormRealizarReserva>
      </div>
    );
  }
}
export default RealizarReserva;
