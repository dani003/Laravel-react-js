import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import FormVisualizarReserva from './../secondary/VisualizarReserva/FormVisualizarReserva.js';


class VisualizarReservas extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <FormVisualizarReserva></FormVisualizarReserva>
      </div>
    );
  }
}
export default VisualizarReservas;
