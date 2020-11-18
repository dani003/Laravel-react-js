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


class CrearNuevoLaboratorio extends Component {
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
            <div className="CrearNuevoUsuarioBox2">
                <div class="bp3-navbar BarraTituloCrearLab2">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Agregar Laboratorio </h2></div>
                  </div>
                  <div class="bp3-navbar-group bp3-align-right">
                    <span class="bp3-navbar-divider"></span>
                    <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
                  </div>
                </div>
                <div class="CrearNuevoLaboratorioForm2">
                      <div className="infoProfile ProfileTittles">
                        <FormGroup
                          label="El Laboratorio ha sido creado con exito !!"
                          labelFor="text-input">
                        </FormGroup>
                        <div>
                            <Link to="/GestionLaboratorio">
                                <button type="button" class="bp3-button bp3-icon-undo  bp3-intent-danger botonesCrearUsuario">Volver</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                      <img className="imgCrearNuevoLab" src="https://www.bio-class.com/cotizador/wp-content/uploads/2020/09/2357575.png"></img>
                    </div>
                </div>
            </div>
        ) : (
            <div className="CrearNuevoLaboratorioBox">
                <div class="bp3-navbar BarraTituloCrearLab">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Agregar Laboratorio </h2></div>
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
                          label="Encargado"
                          labelFor="text-input">
                              <InputGroup className="ProfileInput" name='encargado' id="text-input"  placeholder="Ingresar encargado del equipo" />
                        </FormGroup>
                        <div>
                            <Link to="/GestionLaboratorio">
                                <button type="button" class="bp3-button bp3-icon-undo  bp3-intent-danger botonesCrearUsuario">Volver</button>
                            </Link>
                                <button type="button" class="bp3-button bp3-icon-new-object  bp3-intent-success botonesCrearUsuario" onClick={this.editItem.bind(this)}>Agregar</button>
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
export default CrearNuevoLaboratorio;
