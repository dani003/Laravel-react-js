import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './../../../../css/Imagenes/LogoPIDI.jpg'

class TopBar extends Component {
  render() {
    return (
      <div className="navBarbox2 ZIndex">
        <div className='right'>
          <div className="imagedispositivo">
            <img className="imgLogoUtem" src="http://sitios.vtte.utem.cl/principal/wp-content/uploads/sites/2/2017/03/marca-utem-horizontal.jpg"></img>
          </div>
        </div>
        <div className="left">
          <img className="logoPIDI" src={logo} />
        </div>
    </div>
    );
  }
}

export default TopBar;
