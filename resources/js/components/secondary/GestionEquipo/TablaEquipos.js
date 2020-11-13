import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TablaEquipos extends Component {
  render() {
    return (
        <div class="container">
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
                        <button type="button" class="bp3-button bp3-icon-add  bp3-intent-success botonGestionUsuario">Agregar Equipo</button>
                    </Link>
                </div>
                <div class="bp3-input-group barraBuscarGestion">
                  <span class="bp3-icon bp3-icon-search"></span>
                  <input type="text" class="bp3-input"  placeholder="Buscar por nombre.." />
                  <button class="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
                </div>
                </div>
          <div class="tablaEquipos">
              <table class="bp3-html-table bp3-html-table-bordered bp3-html-table-striped">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Equipo</th>
                      <th>Laboratorio</th>
                      <th>Encargado</th>
                      <th>Descripcion</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>TSLint</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>
                          <Link to="/ModificarEquipo">
                              <button type="button" class="botonesModElim bp3-button bp3-icon-edit  bp3-intent-primary bp3-small">Modificar</button>
                          </Link>
                          <button type="button" class="botonesModElim bp3-button bp3-icon-delete  bp3-intent-danger bp3-small">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>TypeScript</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>
                          <Link to="/ModificarEquipo">
                              <button type="button" class="botonesModElim bp3-button bp3-icon-edit  bp3-intent-primary bp3-small">Modificar</button>
                          </Link>
                          <button type="button" class="botonesModElim bp3-button bp3-icon-delete  bp3-intent-danger bp3-small">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Composable charting library built on top of D3</td>
                      <td>SVG, TypeScript, D3</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>
                          <Link to="/ModificarEquipo">
                              <button type="button" class="botonesModElim bp3-button bp3-icon-edit  bp3-intent-primary bp3-small">Modificar</button>
                          </Link>
                          <button type="button" class="botonesModElim bp3-button bp3-icon-delete  bp3-intent-danger bp3-small">Eliminar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
    );
  }
}

export default TablaEquipos;
