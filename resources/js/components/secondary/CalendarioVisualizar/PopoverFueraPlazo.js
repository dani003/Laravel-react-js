import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class PopoverFueraPlazo extends Component {
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
                  <button  type="button" className="ReservaInfoBotonF" >F</button>
                  <div>
                      <h5>Esta Fecha ya pasó, por lo que no esta disponible para reservar</h5>
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
                  <button  type="button" className="ReservaInfoBotonF" >F</button>
                  <div>
                      <h5>Esta Fecha ya pasó, por lo que no esta disponible para reservar</h5>
                  </div>
              </Popover>
            </div>
          );
      }
  }
}
export default PopoverFueraPlazo;
