import React, { Component } from 'react';
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
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

class Usuario extends Component {
  render() {
      return (
        <div>
        <div className='UsuarioBox2'>
            <Link to='/Perfil'>
              <div className=" bp3-card bp3-interactive bp3-elevation-3 UsuarioLista">
                <div className="imagedispositivo">
                  <img className="imgProfileUsuario" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
                </div>
                <div className="infodisp">
                  <div className="Nombredisp" >
                    Daniela Ramirez
                  </div>
                </div>
              </div>
          </Link>
          <Link to='/Perfil'>
            <div className=" bp3-card bp3-interactive bp3-elevation-3 UsuarioLista">
              <div className="imagedispositivo">
                <img className="imgProfileUsuario" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
              </div>
              <div className="infodisp">
                <div className="Nombredisp" >
                  Daniela Ramirez
                </div>
              </div>
            </div>
        </Link>
        <Link to='/Perfil'>
          <div className=" bp3-card bp3-interactive bp3-elevation-3 UsuarioLista">
            <div className="imagedispositivo">
              <img className="imgProfileUsuario" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
            </div>
            <div className="infodisp">
              <div className="Nombredisp" >
                Daniela Ramirez
              </div>
            </div>
          </div>
      </Link>
      <Link to='/Perfil'>
        <div className=" bp3-card bp3-interactive bp3-elevation-3 UsuarioLista">
          <div className="imagedispositivo">
            <img className="imgProfileUsuario" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
          </div>
          <div className="infodisp">
            <div className="Nombredisp" >
              Daniela Ramirez
            </div>
          </div>
        </div>
    </Link>
    <Link to='/Perfil'>
      <div className=" bp3-card bp3-interactive bp3-elevation-3 UsuarioLista">
        <div className="imagedispositivo">
          <img className="imgProfileUsuario" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
        </div>
        <div className="infodisp">
          <div className="Nombredisp" >
            Daniela Ramirez
          </div>
        </div>
      </div>
  </Link>

        </div>
      </div>
    );
  }
}
export default Usuario;
//Aqui va el circulo con la imagen de perfil junto al cuadrado de info con el nombre del usuario
//De forma similar al componente de dispositivo del proyecto de software
