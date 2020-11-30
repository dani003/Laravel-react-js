import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import PopoverReservaTesista from './PopoverReservaTesista.js';
import PopoverInfoReserva from './PopoverInfoReserva.js';
import PopoverProcesado from './PopoverProcesado.js';
import PopoverFueraPlazo from './PopoverFueraPlazo.js';

class CalendarioVisualizarTesista extends Component {

  render() {
    return (
      <div>
        <div className='FormCancelarReservaBox'>
        <div class="bp3-navbar BarraTituloCalendario">
          <div class="bp3-navbar-group bp3-align-left ">
            <div><h2>Equipo: Microscopio - Laboratorio: Biotecnologia </h2></div>
          </div>
          <div class="bp3-navbar-group bp3-align-right">
            <span class="bp3-navbar-divider"></span>
            <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
          </div>
        </div>
        <div className="content">
          <div className=" bp3-card bp3-elevation-3 CalendarCard">
          <table>
            <tr>
              <div class="bp3-navbar CardDates">
                <div class="bp3-navbar-group bp3-align-right CardDates1">
                  <button class="bp3-button bp3-minimal bp3-icon-direction-left"></button>
                  <button class="bp3-button bp3-minimal bp3-icon-double-chevron-left"></button>
                </div>
                <div className='monthTitle'>Enero</div>
                <div class="bp3-navbar-group bp3-align-right CardDates2">
                  <button class="bp3-button bp3-minimal bp3-icon-double-chevron-right"></button>
                  <button class="bp3-button bp3-minimal bp3-icon-direction-right"></button>
                </div>
              </div>
            </tr>
            <tr>
              <th class='GreyColorWord'>Lunes</th>
              <th class='GreyColorWord'>Martes</th>
              <th class='GreyColorWord'>Miercoles</th>
              <th class='GreyColorWord'>Jueves</th>
              <th class='GreyColorWord'>Viernes</th>
              <th class='GreyColorWord'>Sabado</th>
              <th class='GreyColorWord'>Domingo</th>
            </tr>
            <tr>
              <td>
                  1
                <div class="bp3-card CardReservaDia">
                    <PopoverProcesado></PopoverProcesado>
                      <PopoverProcesado></PopoverProcesado>
                </div>
              </td>
              <td>
                  2
                <div class="bp3-card CardReservaDia">
                    <PopoverProcesado></PopoverProcesado>
                      <PopoverFueraPlazo></PopoverFueraPlazo>

                </div>
              </td>
              <td>
                  3
                <div class="bp3-card CardReservaNow">
                    <PopoverInfoReserva></PopoverInfoReserva>
                    <PopoverReservaTesista></PopoverReservaTesista>
                }</div>
              </td>
              <td>
                  4
                <div class="bp3-card CardReservaDia">
                <PopoverReservaTesista></PopoverReservaTesista>
                  <PopoverReservaTesista></PopoverReservaTesista>
                </div>
              </td>
              <td>
                  5
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                  <PopoverReservaTesista></PopoverReservaTesista>
                </div>
              </td>
              <td>
                  6
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  7
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                  8
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  9
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>
                </div>
              </td>
              <td>

                 10
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverInfoReserva></PopoverInfoReserva>
              </div>
              </td>
              <td>
                  11
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverInfoReserva></PopoverInfoReserva>

                </div>
              </td>
              <td>
                  12
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverInfoReserva></PopoverInfoReserva>

                </div>
              </td>
              <td>
                  13
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  14
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverInfoReserva></PopoverInfoReserva>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                  15
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>
                </div>
              </td>
              <td>
                  16
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  17
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                     <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  18
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverInfoReserva></PopoverInfoReserva>

                </div>
              </td>
              <td>
                  19
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  20
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  21
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverInfoReserva></PopoverInfoReserva>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                  22
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  23
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  24
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  25
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  26
                <div class="bp3-card CardReservaDia">
                    <PopoverInfoReserva></PopoverInfoReserva>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  27
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>

                </div>
              </td>
              <td>
                  28
                <div class="bp3-card CardReservaDia">
                    <PopoverReservaTesista></PopoverReservaTesista>
                      <PopoverReservaTesista></PopoverReservaTesista>
                </div>
              </td>
            </tr>
          </table>
          </div>
          </div>
          <Link to="/VisualizarReservas">
              <button type="button" class="bp3-button bp3-icon-undo bp3-intent-danger BotonVolverCalendario" >Volver</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CalendarioVisualizarTesista;
