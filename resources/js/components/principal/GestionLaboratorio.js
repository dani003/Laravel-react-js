import React, { Component } from 'react';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import Footer from './../secondary/All/Footer.js';
import CrearNuevoLaboratorio from './../secondary/GestionLaboratorio/CrearNuevoLaboratorio.js';
import TablaLaboratorios from './../secondary/GestionLaboratorio/TablaLaboratorios.js';
import TablaTesistaLab from './../secondary/GestionLaboratorio/TablaTesistaLab.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class GestionLaboratorio extends Component {

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
              <TablaTesistaLab></TablaTesistaLab>
            </div>
          );
      }else{
          return (
            <div>
              <TopBar></TopBar>
              <MenuBar></MenuBar>
              <TablaLaboratorios></TablaLaboratorios>
            </div>
          );
      }
  }
}
export default GestionLaboratorio;
