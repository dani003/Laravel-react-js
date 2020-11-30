import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class PopoverProcesado extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: cookies.get('email')
        };
      }

  render() {
      if(this.state.email == 'investigador@utem.cl' || this.state.email == 'encargado@utem.cl' || this.state.email == 'admin@utem.cl' ){
          return (
            <div>
            <Popover
                  interactionKind={PopoverInteractionKind.CLICK}
                  popoverClassName="bp3-popover-content-sizing"
                  position={Position.RIGHT}>
                  <button  type="button" className="ReservaInfoBotonP" >P</button>
                  <div>
                      <h3>Esta reserva ya ha sido procesada</h3>
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
      }else{
          return (
            <div>
            <Popover
                  interactionKind={PopoverInteractionKind.CLICK}
                  popoverClassName="bp3-popover-content-sizing"
                  position={Position.RIGHT}>
                  <button  type="button" className="ReservaInfoBotonP" >P</button>
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
}
export default PopoverProcesado;
