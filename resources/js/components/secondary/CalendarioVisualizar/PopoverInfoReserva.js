import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";

class PopoverInfoReserva extends Component {

  render() {
          return (
            <div>
            <Popover
                  interactionKind={PopoverInteractionKind.CLICK}
                  popoverClassName="bp3-popover-content-sizing"
                  position={Position.RIGHT}>
                  <button  type="button" className="ReservaInfoBotonM" >R</button>
                  <div>
                      <h5>Informacion de reserva: </h5>
                          <div>
                             <strong>Nombre: </strong>Daniela Ramirez
                          </div>
                          <div>
                             <strong>Laboratorio:</strong> Biotecnologia
                          </div>
                          <div>
                             <strong>Equipo:  </strong>Microscopio
                          </div>
                          <div>
                             <strong>Fecha:</strong> 21/12/2020
                          </div>
                          <div>
                             <strong>Hora: </strong> 09:00 hrs.
                          </div>

                  </div>
              </Popover>
            </div>
          );
  }
}
export default PopoverInfoReserva;
