import React, { Component } from 'react';
import { Link } from "react-router-dom";


class FormRealizarReserva extends Component {
  render() {
    return (
      <div>
        <div className='FormCancelarReservaBox'>
            <div class="bp3-navbar BarraTituloUsuarios">
              <div class="bp3-navbar-group bp3-align-left ">
                <div><h2>Visualizar y realizar reservas </h2></div>
              </div>
              <div class="bp3-navbar-group bp3-align-right">
                <span class="bp3-navbar-divider"></span>
                <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
              </div>
            </div>
          <div className=" bp3-card bp3-interactive bp3-elevation-3 FormCancelarReservaBoxCard">
            <div>
              <img className="imagenCalendario" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png"></img>
            </div>
            <div className="infodisp">
              <div className="Nombredisp FormReserva" >
                <label class="bp3-label bp3-inline ">
                    Seleccionar Equipo:
                  <div class="bp3-select SelectReservas">
                    <select >
                      <option selected value="1">Biotecnologia</option>
                      <option value="1" disabled> * Biologia</option>
                      <option value="1">Microscopio</option>
                      <option value="1">Microscopio</option>
                      <option value="1" disabled> * Quimica</option>
                      <option value="1">Microscopio</option>
                      <option value="1">Microscopio</option>
                      <option value="1" disabled> * Nanotecnologias</option>
                      <option value="1">Microscopio</option>
                      <option value="1">Microscopio</option>
                      <option value="1" disabled>Otros</option>
                    </select>
                  </div>
                </label>
                <Link to="/CalendarioVisualizar">
                <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-success">Ir al calendario</button>
              </Link>
                <Link to="/">
                <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-danger">Volver</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormRealizarReserva;
