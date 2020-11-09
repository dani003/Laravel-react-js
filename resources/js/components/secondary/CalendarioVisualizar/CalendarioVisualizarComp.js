import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";



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
        <div><h2>Laboratorio:</h2></div>
          <div className=" bp3-card bp3-elevation-3 CalendarCard">

          </div>
        </div>
      </div>):(
        <div className='FormCancelarReservaBox'>


        <div class="bp3-navbar">
          <div class="bp3-navbar-group bp3-align-left">
            <div><h2>Laboratorio: Biotecnologia </h2></div>
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
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                }</div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >L</button>
                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>
              </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class=" ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonT" onClick={this.editItem.bind(this)} >T</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonM" onClick={this.editItem.bind(this)} >M</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
              <td>
                <div class="bp3-card CardReservaDia">
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>
                  <button  type="button" class="ReservaInfoBotonL" onClick={this.editItem.bind(this)} >L</button>

                </div>
              </td>
            </tr>
          </table>
          </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default CalendarioVisualizarComp;
