import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                  Laboratorio
                <div class="bp3-select SelectReservas">
                  <select >
                    <option selected>Seleccionar equipo</option>
                    <option value="1">Biotecnologia</option>
                    <option value="1">Biologia</option>
                    <option value="1">quimica</option>
                    <option value="1">nanotecnologias</option>
                    <option value="1">Otros</option>
                  </select>
                </div>
              </label>
              <Link to="/">
              <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-success">Ir A Cancelar</button>
            </Link>
              <Link to="/">
              <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-danger">Volver</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCancelarReserva;
