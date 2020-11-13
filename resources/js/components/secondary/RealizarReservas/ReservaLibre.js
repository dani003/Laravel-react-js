import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Card, Elevation, Checkbox,Icon, TextArea } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";
import {
    Boundary,
    Breadcrumb,
    Classes,
    H5,
    IMenuItemProps,
    Label,
    Menu,
    MenuItem,
    OverflowList,
    Popover,
    Position,
    RadioGroup,
    Slider,
    FormGroup,
    InputGroup,
    FileInput,
} from "@blueprintjs/core";



class ReservaLibre extends Component {

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
  }

  render() {
    var {edit}=this.state;
    return (
      <div>
        {(edit) ? (
            <div className="CrearNuevoUsuarioBox">
                <div class="bp3-navbar BarraTituloReserva">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Reservar equipo </h2></div>
                  </div>
                  <div class="bp3-navbar-group bp3-align-right">
                    <span class="bp3-navbar-divider"></span>
                    <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
                  </div>
                </div>
                <div class="CrearNuevoUsuarioForm">
                      <div className="infoProfile ProfileTittles">
                        <FormGroup
                          label="El Equipo ha sido Reservado con exito !!"
                          labelFor="text-input">
                        </FormGroup>
                        <div>
                            <Link to="/CalendarioVisualizar">
                                <button type="button" class="bp3-button bp3-icon-add  bp3-intent-danger botonesCrearUsuario">Volver</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            ):(
                <div>
                <div className="CrearNuevoLaboratorioBox">
                    <div class="bp3-navbar BarraTituloReserva">
                      <div class="bp3-navbar-group bp3-align-left ">
                        <div><h2>Reservar equipo </h2></div>
                      </div>
                      <div class="bp3-navbar-group bp3-align-right">
                        <span class="bp3-navbar-divider"></span>
                        <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
                      </div>
                    </div>
                    <div class="CrearNuevoUsuarioForm">
                          <div className="infoProfile ProfileTittles">
                            <FormGroup
                              label="Nombre"
                              labelFor="text-input">
                              <InputGroup className="ProfileInput" disabled="disabled" name='firstname' id="text-input"
                              onChange={ this.handleChange } placeholder="Daniela Ramirez Aravena"/>
                            </FormGroup>
                            <FormGroup
                              label="Equipo"
                              labelFor="text-input">
                              <InputGroup className="ProfileInput" disabled="disabled" name='firstname' id="text-input"
                              onChange={ this.handleChange } placeholder="Microscopio"/>
                            </FormGroup>
                            <FormGroup
                              label="Laboratorio"
                              labelFor="text-input">
                              <InputGroup className="ProfileInput" disabled="disabled" name='firstname' id="text-input"
                              onChange={ this.handleChange } placeholder="Biotecnologia"/>
                            </FormGroup>
                            <FormGroup
                              label="Encargado de laboratorio"
                              labelFor="text-input">
                              <InputGroup className="ProfileInput" disabled="disabled" name='firstname' id="text-input"
                              onChange={ this.handleChange } placeholder="Biotecnologia"/>
                            </FormGroup>
                            <FormGroup
                              label="Fecha"
                              labelFor="text-input">
                              <InputGroup className="ProfileInput" disabled="disabled" name='firstname' id="text-input"
                              onChange={ this.handleChange } placeholder="23/12/2020"/>
                            </FormGroup>
                            <FormGroup
                              label="Hora"
                              labelFor="text-input">
                              <InputGroup className="ProfileInput" disabled="disabled" name='firstname' id="text-input"
                              onChange={ this.handleChange } placeholder="15:00 hrs."/>
                            </FormGroup>

                            <div>
                                <Link to="/GestionEquipo">
                                    <button type="button" class="bp3-button bp3-icon-add  bp3-intent-danger botonesCrearUsuario">Cancelar</button>
                                </Link>
                                    <button type="button" class="bp3-button bp3-icon-add  bp3-intent-success botonesCrearUsuario" onClick={this.editItem.bind(this)}>Reservar</button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
          )}
      </div>
    );
  }
}

export default ReservaLibre;
