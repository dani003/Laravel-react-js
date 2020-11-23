import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import { Alignment, Checkbox, H5, Label, Switch } from "@blueprintjs/core";
import { Classes, Code, H3, Overlay} from "@blueprintjs/core";
import BotonCrearEquipo from './BotonCrearEquipo.js';
import TablaTesista from './TablaTesista.js';

class TablaEquipos extends Component {

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
                <div>
                    <BotonCrearEquipo></BotonCrearEquipo>
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
                          <Popover
                                interactionKind={PopoverInteractionKind.CLICK}
                                popoverClassName="bp3-popover-content-sizing"
                                position={Position.RIGHT}>
                                <button type="button" className="botonesModElim bp3-button bp3-icon-remove  bp3-intent-danger bp3-small">Eliminar</button>
                                <div>
                                    <h5>¿ Esta seguro de querer eliminar este equipo ?</h5>
                                    <Button className="bp3-popover-dismiss" onClick={this.handleOpen}>Si</Button>
                                </div>
                            </Popover>
                            <Overlay onClose={this.handleOpen} className={Classes.OVERLAY_SCROLL_CONTAINER} {...this.state}>
                                <div className="cardPop bp3-dialog-container">
                                    <div class="bp3-dialog">
                                      <div class="bp3-dialog-header">
                                        <span class="bp3-icon-large bp3-icon-remove"></span>
                                        <h4 class="bp3-heading">Eliminar</h4>
                                        <button aria-label="Close" class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross" onClick={this.handleOpen} ></button>
                                      </div>
                                      <div class="bp3-dialog-body">
                                        Su equipo ha sido eliminado con éxito !!
                                      </div>
                                      <div class="bp3-dialog-footer">
                                        <div class="bp3-dialog-footer-actions">
                                          <button type="submit" onClick={this.handleOpen} class="bp3-button bp3-intent-primary">Ok</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </Overlay>
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
                          <Popover
                                interactionKind={PopoverInteractionKind.CLICK}
                                popoverClassName="bp3-popover-content-sizing"
                                position={Position.RIGHT}>
                                <button type="button" className="botonesModElim bp3-button bp3-icon-remove  bp3-intent-danger bp3-small">Eliminar</button>
                                <div>
                                    <h5>¿ Esta seguro de querer eliminar este equipo ?</h5>
                                    <Button className="bp3-popover-dismiss" onClick={this.handleOpen}>Si</Button>
                                </div>
                            </Popover>
                            <Overlay onClose={this.handleOpen} className={Classes.OVERLAY_SCROLL_CONTAINER} {...this.state}>
                                <div className="cardPop bp3-dialog-container">
                                    <div class="bp3-dialog">
                                      <div class="bp3-dialog-header">
                                        <span class="bp3-icon-large bp3-icon-remove"></span>
                                        <h4 class="bp3-heading">Eliminar</h4>
                                        <button aria-label="Close" class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross" onClick={this.handleOpen} ></button>
                                      </div>
                                      <div class="bp3-dialog-body">
                                        Su equipo ha sido eliminado con éxito !!
                                      </div>
                                      <div class="bp3-dialog-footer">
                                        <div class="bp3-dialog-footer-actions">
                                          <button type="submit" onClick={this.handleOpen} class="bp3-button bp3-intent-primary">Ok</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </Overlay>
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
                          <Popover
                                interactionKind={PopoverInteractionKind.CLICK}
                                popoverClassName="bp3-popover-content-sizing"
                                position={Position.RIGHT}>
                                <button type="button" className="botonesModElim bp3-button bp3-icon-remove  bp3-intent-danger bp3-small">Eliminar</button>
                                <div>
                                    <h5>¿ Esta seguro de querer eliminar este equipo ?</h5>
                                    <Button className="bp3-popover-dismiss" onClick={this.handleOpen}>Si</Button>
                                </div>
                            </Popover>
                            <Overlay onClose={this.handleOpen} className={Classes.OVERLAY_SCROLL_CONTAINER} {...this.state}>
                                <div className="cardPop bp3-dialog-container">
                                    <div class="bp3-dialog">
                                      <div class="bp3-dialog-header">
                                        <span class="bp3-icon-large bp3-icon-remove"></span>
                                        <h4 class="bp3-heading">Eliminar</h4>
                                        <button aria-label="Close" class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross" onClick={this.handleOpen} ></button>
                                      </div>
                                      <div class="bp3-dialog-body">
                                        Su equipo ha sido eliminado con éxito !!
                                      </div>
                                      <div class="bp3-dialog-footer">
                                        <div class="bp3-dialog-footer-actions">
                                          <button type="submit" onClick={this.handleOpen} class="bp3-button bp3-intent-primary">Ok</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </Overlay>
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
