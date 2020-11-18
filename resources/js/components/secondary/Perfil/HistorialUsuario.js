import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import { Alignment, Checkbox, H5, Label, Switch } from "@blueprintjs/core";
import { Classes, Code, H3, Overlay} from "@blueprintjs/core";

class HistorialUsuario extends Component {

    constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  handleClose() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }
  render() {
    return (
        <div class="container">
            <div class="bp3-navbar BarraTituloTabla2">
              <div class="bp3-navbar-group bp3-align-left ">
                <div><h2>Historial de reservas</h2></div>
              </div>
              <div class="bp3-navbar-group bp3-align-right">
                <span class="bp3-navbar-divider"></span>
                <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
              </div>
            </div>
          <div class="tablaEquipos">
              <table class="bp3-html-table bp3-html-table-bordered bp3-html-table-striped">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Fecha/Hora</th>
                      <th>Equipo</th>
                      <th>Laboratorio</th>
                      <th>Encargado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>analysis linter </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>TypeScript</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>analysis linter </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Composable charting library built on top of D3</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>analysis linter </td>
                    </tr>
                  </tbody>
                </table>
          </div>
          <Link to="/Perfil">
          <button type="button" className="BotonVolverCalendario bp3-button bp3-icon-undo bp3-intent-success">Volver</button>
          </Link>
      </div>
    );
  }
}

export default HistorialUsuario;
