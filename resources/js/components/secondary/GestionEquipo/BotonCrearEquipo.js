import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import {Navbar, Button, NavDropdown, Navm, Card} from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class BotonCrearEquipo extends Component {
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
             <div class="bp3-navbar BarraTituloTabla3">
               <div class="bp3-navbar-group bp3-align-left ">
                 <div><h2>Lista de equipos</h2></div>
               </div>
               <div class="bp3-navbar-group bp3-align-right">
                 <span class="bp3-navbar-divider"></span>
                 <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
               </div>
             </div>
             <div  className=" bp3-card bp3-elevation-3 GestionEquipoCard">
             </div>
        </div>
         );
      }else{
    return(
    <div>
        <div class="bp3-navbar BarraTituloTabla">
          <div class="bp3-navbar-group bp3-align-left ">
            <div><h2>Lista de equipos</h2></div>
          </div>
          <div class="bp3-navbar-group bp3-align-right">
            <span class="bp3-navbar-divider"></span>
            <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
          </div>
        </div>
        <div className=" bp3-card bp3-elevation-3 GestionEquipoCard">
        <div class='botonCrearUsuario'>
            <Link to="/AgregarEquipo">
                <button type="button" class="bp3-button bp3-icon-new-object  bp3-intent-success botonGestionUsuario">Agregar Equipo</button>
            </Link>
        </div>
        <div class="bp3-input-group barraBuscarGestion">
          <span class="bp3-icon bp3-icon-search"></span>
          <input type="text" class="bp3-input"  placeholder="Buscar por nombre.." />
          <button class="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
        </div>
        </div>
    </div>
    );
  }
}
}

export default BotonCrearEquipo;
