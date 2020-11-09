import React, { Component } from 'react';
import { Link } from "react-router-dom";


class FormRealizarReserva extends Component {
  render() {
    return (
      <div>
        <div className='FormCancelarReservaBox'>
          <div className=" bp3-card bp3-interactive bp3-elevation-3 FormCancelarReservaBoxCard">
            <div>
              <img className="imagenCalendario" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png"></img>
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
                <Link to="/CalendarioVisualizar">
                <button type="button" class="bp3-button bp3-icon-add BotonReserva bp3-intent-success">Ir A Ver Calendario</button>
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
