import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CalendarioVisualizarComp from './../secondary/CalendarioVisualizar/CalendarioVisualizarComp.js';
import CalendarioVisualizarTesista from './../secondary/CalendarioVisualizar/CalendarioVisualizarTesista.js';



class CalendarioVisualizar extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MenuBar></MenuBar>
        <CalendarioVisualizarTesista></CalendarioVisualizarTesista>
      </div>
    );
  }
}
export default CalendarioVisualizar;
