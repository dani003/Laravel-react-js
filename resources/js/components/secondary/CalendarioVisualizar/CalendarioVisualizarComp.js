import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";


class CalendarioVisualizarComp extends Component {



  constructor(props)
  {
    super(props);
    this.state={
      edit:false,
    };

    this.editItem= this.editItem.bind(this);
  }


  editItem(edit){
    this.setState({edit: !this.state.edit});
    //this.GetUser();
    axios.put("http://localhost:3002/api/user/05360643-ee4a-44fa-95e5-a4c3463bccd1/attribute",
    {firstname: this.state.firstname,})
    axios.put("http://localhost:3002/api/user/05360643-ee4a-44fa-95e5-a4c3463bccd1/attribute",
    {lastname: this.state.lastname,})
  }


  render() {
    var {edit}=this.state;
    return (
      <div>
        {(edit) ? (
          <div>
            <div className='FormCancelarReservaBox'>
            <div><h2>Informacion de reserva: </h2></div>
              <div className=" bp3-card bp3-elevation-3 CalendarCardRespuesta">

                  <div>
                     Nombre: Daniela Ramirez
                  </div>
                  <div>
                     Laboratorio: Biotecnologia
                  </div>
                  <div>
                     Equipo: Microscopio
                  </div>
                  <div>
                     Fecha: 21/12/2020
                  </div>
                  <div>
                     Hora: 15:00 hrs.
                  </div>

                  <button type="button" class="bp3-button bp3-icon-add BotonReserva2 bp3-intent-danger" onClick={this.editItem.bind(this)}>Volver</button>
              </div>
            </div>
          </div>):(
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
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >T</button>
                </div>
              </td>
              <td>
                  2
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                  3
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
              <Link to="/RealizarReservas">
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
              </Link>


                }</div>
              </td>
              <td>
                  4
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  5
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  6
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  7
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
            </tr>
            <tr>
              <td>
                  8
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  9
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>

                 10
                <div class="bp3-card CardReservaDia">
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
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>
              </div>
              </td>
              <td>
                  11
                <div class="bp3-card CardReservaDia">
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
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                  12
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                  13
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class=" ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  14
                <div class="bp3-card CardReservaDia">
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
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                  15
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  16
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  17
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  18
                <div class="bp3-card CardReservaDia">
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
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                  19
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  20
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  21
                <div class="bp3-card CardReservaDia">
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
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                  22
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  23
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  24
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  25
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  26
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
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
              </td>
              <td>
                  27
                <div class="bp3-card CardReservaDia">
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
              </td>
              <td>
                  28
                <div class="bp3-card CardReservaDia">
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
              </td>
            </tr>
          </table>
          </div>
          </div>
          <Link to="/VisualizarReservas">
              <button type="button" class="bp3-button bp3-icon-add bp3-intent-danger BotonVolverCalendario" >Volver</button>
          </Link>
        </div>
    )}


      </div>
    );
  }
}

export default CalendarioVisualizarComp;
