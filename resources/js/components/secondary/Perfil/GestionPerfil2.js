import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
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

class GestionPerfil extends Component {

  render() {
      return (
      <div className="GestionPerfilBox">
      <div className="content">
          <div class="bp3-navbar BarraTituloCrearLab">
            <div class="bp3-navbar-group bp3-align-left ">
              <div><h2>Perfil de usuario </h2></div>
            </div>
          </div>
        <Card elevation={Elevation.TWO} className="cardProfile">
            <div className="imgProfileBox">
              <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
            </div>
          <div className="infoProfile profiledata">
              <div><p className='ProfileTittles' >Nombre:  </p></div>
              <p className="colorWhite">Daniela</p>
              <div><p className='ProfileTittles'>Apellidos: </p></div>
              <p className="colorWhite">Ramirez Aravena</p>
              <div><p className='ProfileTittles'>Cargo: </p></div>
              <p className="colorWhite">Encargado de laboratorio</p>
              <div><p className='ProfileTittles'>Email: </p></div>
              <p className="colorWhite">Daniela.ramirez003@gmail.com</p>
              <div><p className='ProfileTittles'>Descripcion: </p></div>
              <p className="colorWhite">Encargado del laboratorio de bbiotecnologia </p>
          </div>
          <div className="opcionesPerfil">
              <Link to="/PerfilHistorial2">
                  <div className="RectanguloCard bp3-card bp3-interactive">
                      <h6>Historial de reservas</h6>
                  </div>
              </Link>
          </div>
        </Card>
    </div>
  </div>
    );
  }
}

export default GestionPerfil;
