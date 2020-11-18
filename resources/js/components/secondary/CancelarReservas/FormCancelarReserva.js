import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Alignment, Checkbox, H5, Label, Switch } from "@blueprintjs/core";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import { Classes, Code, H3, Overlay} from "@blueprintjs/core";

const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";
const OVERLAY_TALL_CLASS = "docs-overlay-example-tall";

class FormCancelarReserva extends Component {

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
              <button type="button" className="bp3-button bp3-icon-undo BotonReserva2 bp3-intent-danger">Volver</button>
            </Link>
            <Popover
                  interactionKind={PopoverInteractionKind.CLICK}
                  popoverClassName="bp3-popover-content-sizing"
                  position={Position.RIGHT}>
                  <button type="button" className="bp3-button bp3-icon-remove BotonReserva2 bp3-intent-success">Cancelar reserva</button>
                  <div>
                      <h5>¿Estas seguro de querer cancelar esta reserva?</h5>
                      <Button className="bp3-popover-dismiss" onClick={this.handleOpen}>Si</Button>
                      <Link to="/CancelarReservas">
                          <Button className="bp3-popover-dismiss">No</Button>
                      </Link>
                  </div>
              </Popover>
              <Overlay onClose={this.handleOpen} className={Classes.OVERLAY_SCROLL_CONTAINER} {...this.state}>
                  <div className="cardPop bp3-dialog-container">
                      <div class="bp3-dialog">
                        <div class="bp3-dialog-header">
                          <span class="bp3-icon-large bp3-icon-remove"></span>
                          <h4 class="bp3-heading">Cancelar Reserva</h4>
                          <button aria-label="Close" class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross" onClick={this.handleOpen} ></button>
                        </div>
                        <div class="bp3-dialog-body">
                          Su reserva ha sido cancelada con éxito !!
                        </div>
                        <div class="bp3-dialog-footer">
                          <div class="bp3-dialog-footer-actions">
                            <button type="submit" onClick={this.handleOpen} class="bp3-button bp3-intent-primary">Ok</button>
                          </div>
                        </div>
                      </div>
                    </div>
              </Overlay>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCancelarReserva;
