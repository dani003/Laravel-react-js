import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Alignment, Checkbox, H5, Label, Switch } from "@blueprintjs/core";
import { Button, Classes, Code, H3, Intent, Overlay } from "@blueprintjs/core";

class FormCancelarReserva extends Component {
  render() {
    return (
      <div className='FormCancelarReservaBox'>
          <div class="bp3-navbar BarraTituloCrearLab">
            <div class="bp3-navbar-group bp3-align-left ">
              <div><h2>Cancelar Reserva </h2></div>
            </div>
            <div class="bp3-navbar-group bp3-align-right">
              <span class="bp3-navbar-divider"></span>
              <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
            </div>
          </div>
        <div className=" bp3-card bp3-interactive bp3-elevation-3 FormCancelarReservaBoxCard">
          <div>
            <img className="imagenCalendario" src="https://img.icons8.com/cotton/2x/delete-sign--v2.png"></img>
          </div>
          <div className="infodisp">
            <div className="Nombredisp FormReserva" >
              <label class="bp3-label bp3-inline ">
                  Estas son sus reservas activas. Seleccione las que desee cancelar:
                  <label class="bp3-control bp3-checkbox">
                    <input type="checkbox" />
                    <span class="bp3-control-indicator"></span>
                    Microscopio | Biotecnologia (23/12/2020 15:00 hrs.)
                  </label>
                  <label class="bp3-control bp3-checkbox">
                    <input type="checkbox" />
                    <span class="bp3-control-indicator"></span>
                    Microscopio | Quimica (23/12/2020 15:00 hrs.)
                  </label>
                  <label class="bp3-control bp3-checkbox">
                    <input type="checkbox" />
                    <span class="bp3-control-indicator"></span>
                    Microscopio | Nanotecnologia (23/12/2020 15:00 hrs.)
                  </label>
              </label>
              <Link to="/">
              <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-danger">Volver</button>
            </Link>
              <Link to="/">
              <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-success">Cancelar reserva</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCancelarReserva;
