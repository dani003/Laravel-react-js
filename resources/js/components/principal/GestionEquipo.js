import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoEquipo from './../secondary/GestionEquipo/CrearNuevoEquipo.js';
import TablaEquipos from './../secondary/GestionEquipo/TablaEquipos.js';
import TablaTesista from './../secondary/GestionEquipo/TablaTesista.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class GestionEquipo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: cookies.get('email')
        };
      }

  render() {
      if(this.state.email == 'tesista@utem.cl' || this.state.email == 'investigador@utem.cl'){
          return (
            <div>
              <TopBar></TopBar>
              <MenuBar></MenuBar>
              <TablaTesista></TablaTesista>
            </div>
          );
      }else{
          return (
            <div>
              <TopBar></TopBar>
              <MenuBar></MenuBar>
              <TablaEquipos></TablaEquipos>
            </div>
          );
      }

  }
}
export default GestionEquipo;
