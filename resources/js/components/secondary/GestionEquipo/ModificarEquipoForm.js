import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
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
import { Link } from "react-router-dom";


class ModificarEquipoForm extends Component {
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
                <div class="bp3-navbar BarraTituloCrear">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Modificar equipo </h2></div>
                  </div>
                  <div class="bp3-navbar-group bp3-align-right">
                    <span class="bp3-navbar-divider"></span>
                    <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
                  </div>
                </div>
                <div class="CrearNuevoUsuarioForm">
                      <div className="infoProfile ProfileTittles">
                        <FormGroup
                          label="El Equipo ha sido modificado con exito !!"
                          labelFor="text-input">
                        </FormGroup>
                        <div>
                            <Link to="/ListaUsuarios">
                                <button type="button" class="bp3-button bp3-icon-add  bp3-intent-danger botonesCrearUsuario">Volver</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="CrearNuevoLaboratorioBox">
                <div class="bp3-navbar BarraTituloCrear">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Modificar equipo </h2></div>
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
                          <InputGroup className="ProfileInput" name='firstname' id="text-input" onChange={ this.handleChange }
                          placeholder="Ingresar Nombre"/>
                        </FormGroup>
                        <FormGroup
                          label="Descripcion"
                          labelFor="text-input">
                          <textarea class="bp3-input bp3-fill"  dir="auto"></textarea>
                        </FormGroup>
                        <FormGroup
                          label="Laboratorio"
                          labelFor="text-input">
                          <div class="bp3-select">
                              <select >
                                <option selected>Seleccionar equipo</option>
                                <option value="1">Biotecnologia</option>
                                <option value="1">Biologia</option>
                                <option value="1">quimica</option>
                                <option value="1">nanotecnologias</option>
                                <option value="1">Otros</option>
                              </select>
                          </div>
                        </FormGroup>
                        <FormGroup
                          label="Encargado"
                          labelFor="text-input">
                              <InputGroup className="ProfileInput" name='encargado' id="text-input"  placeholder="Ingresar encargado del equipo" />
                        </FormGroup>
                        <div>
                            <Link to="/GestionEquipo">
                                <button type="button" class="bp3-button bp3-icon-add  bp3-intent-danger botonesCrearUsuario">Cancelar</button>
                            </Link>
                                <button type="button" class="bp3-button bp3-icon-add  bp3-intent-success botonesCrearUsuario" onClick={this.editItem.bind(this)}>Modificar</button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )}
        </div>

    );
  }
}
export default ModificarEquipoForm;
