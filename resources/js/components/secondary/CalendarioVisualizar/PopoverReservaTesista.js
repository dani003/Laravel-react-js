import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class PopoverReservaTesista extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: cookies.get('email')
        };
      }

  render() {
      if(this.state.email == 'tesista@utem.cl'){
          return (
            <div>
                <Popover
                      interactionKind={PopoverInteractionKind.CLICK}
                      popoverClassName="bp3-popover-content-sizing"
                      position={Position.RIGHT}>
                      <button  type="button" className="ReservaInfoBotonL" >L</button>
                      <div>
                          <h5>Equipo disponible en el horario seleccionado</h5>
                          <p>Para trabajar con el equipo solicitar a su profesor asignado</p>
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
                <button  type="button" className="ReservaInfoBotonL" >L</button>
                <div>
                    <h5>Equipo disponible en el horario seleccionado</h5>
                    <p>Si desea reservar, presionar boton "Reservar"</p>
                    <Link to="/RealizarReservas">
                        <Button className="bp3-popover-dismiss">Reservar</Button>
                    </Link>
                </div>
            </Popover>
            </div>
        );
      }


  }
}
export default PopoverReservaTesista;
