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


class CrearNuevoUsuarioForm extends Component {
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
                <div class="bp3-navbar BarraTituloUsuarios">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Crear Usuario </h2></div>
                  </div>
                  <div class="bp3-navbar-group bp3-align-right">
                    <span class="bp3-navbar-divider"></span>
                    <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
                  </div>
                </div>
                <div class="CrearNuevoUsuarioForm4">
                      <div className="infoProfile ProfileTittles">
                        <FormGroup
                          label="El Usuario ha sido creado con exito !!"
                          labelFor="text-input">
                        </FormGroup>
                        <div>
                            <Link to="/ListaUsuarios">
                                <button type="button" class="bp3-button bp3-icon-undo  bp3-intent-danger botonesCrearUsuario">Volver</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                      <img className="imgCrearNuevoUsuario" src="https://purepng.com/public/uploads/large/purepng.com-scientistscientistknowledgescientistsphysicalphysicalnature-1421526965187jopjq.png"></img>
                    </div>
                </div>
            </div>
        ) : (
            <div className="CrearNuevoUsuarioBox">
                <div class="bp3-navbar BarraTituloCrearUsuario">
                  <div class="bp3-navbar-group bp3-align-left ">
                    <div><h2>Crear Usuario</h2></div>
                  </div>
                  <div class="bp3-navbar-group bp3-align-right">
                    <span class="bp3-navbar-divider"></span>
                    <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
                  </div>
                </div>
                <div class="CrearNuevoUsuarioForm">
                      <div className="infoProfile ProfileTittles">
                        <FormGroup
                          label="Nombres"
                          labelFor="text-input">
                          <InputGroup className="ProfileInput" name='firstname' id="text-input" onChange={ this.handleChange }
                          placeholder="Ingresar Nombre"/>
                        </FormGroup>
                        <FormGroup
                          label="Apellidos"
                          labelFor="text-input">
                          <InputGroup className="ProfileInput" name='lastname' id="text-input"
                          placeholder="Ingresar Apellidos"/>
                        </FormGroup>
                        <FormGroup
                          label="Rol"
                          labelFor="text-input">
                          <div class="bp3-select">
                            <select>
                              <option selected>Administrador</option>
                              <option value="1">Investigador</option>
                              <option value="1">Tesista</option>
                            </select>
                          </div>
                        </FormGroup>
                        <FormGroup
                          label="Email"
                          labelFor="text-input">
                          <InputGroup className="ProfileInput" name='email' id="text-input"  placeholder="Ingresar Email" />
                        </FormGroup>
                        <FormGroup
                          labelFor="text-input">
                          <Button type="button" class="bp3-button bp3-icon-new-object " intent="success" >Generar Contraseña</Button>
                      <InputGroup className="ProfileInput" name='contraseña' id="text-input"  placeholder="******************" disabled />
                        </FormGroup>
                        <FormGroup
                          label="Telefono"
                          labelFor="text-input">
                          <InputGroup className="ProfileInput" name='telefono' id="text-input"
                          placeholder="Ingresar Telefono"/>
                        </FormGroup>
                        <div>
                            <Link to="/ListaUsuarios">
                                <button type="button" class="bp3-button bp3-icon-undo  bp3-intent-danger botonesCrearUsuario">Volver</button>
                            </Link>
                                <button type="button" class="bp3-button bp3-icon-new-object  bp3-intent-success botonesCrearUsuario" onClick={this.editItem.bind(this)}>Crear Usuario</button>
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
export default CrearNuevoUsuarioForm;
