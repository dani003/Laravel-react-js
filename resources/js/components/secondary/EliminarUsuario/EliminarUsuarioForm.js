import React, { Component } from 'react';
import axios from 'axios';
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




class EliminarUsuarioForm extends Component {

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
        {(edit) ? (<div className="CrearNuevoUsuarioBox2">
            <div class="bp3-navbar BarraTituloUsuarios">
              <div class="bp3-navbar-group bp3-align-left ">
                <div><h2>Eliminar Usuario </h2></div>
              </div>
              <div class="bp3-navbar-group bp3-align-right">
                <span class="bp3-navbar-divider"></span>
                <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
              </div>
            </div>
            <div class="CrearNuevoUsuarioForm">
                  <div className="infoProfile ProfileTittles">
                    <FormGroup
                      label="El usuario Ha sido eliminado con exito !!"
                      labelFor="text-input">
                    </FormGroup>
                    <div>
                        <Link to="/ListaUsuarios">
                            <button type="button" class="bp3-button bp3-icon-undo  bp3-intent-danger botonesCrearUsuario">Volver</button>
                        </Link>

                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>) : (<div className="CrearNuevoUsuarioBox2">
        <div class="bp3-navbar BarraTituloUsuarios">
          <div class="bp3-navbar-group bp3-align-left ">
            <div><h2>Eliminar Usuario </h2></div>
          </div>
          <div class="bp3-navbar-group bp3-align-right">
            <span class="bp3-navbar-divider"></span>
            <button class="bp3-button bp3-minimal bp3-icon-info-sign"></button>
          </div>
        </div>
            <div class="CrearNuevoUsuarioForm">
                  <div className="infoProfile ProfileTittles">
                    <FormGroup
                      label="Email"
                      labelFor="text-input">
                      <InputGroup className="ProfileInput" name='email' id="text-input"  placeholder="Ingresar Email" />
                    </FormGroup>
                    <div>
                        <Link to="/ListaUsuarios">
                            <button type="button" class="bp3-button bp3-icon-undo  bp3-intent-danger botonesCrearUsuario">Volver</button>
                        </Link>
                            <button type="button" class="bp3-button bp3-icon-remove  bp3-intent-success botonesCrearUsuario " onClick={this.editItem.bind(this)}>Eliminar Usuario</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>)}
        </div>
    );
  }
}
export default EliminarUsuarioForm;
