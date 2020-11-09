import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
          <img className="imgUsuario" src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg"></img>
        </div>
    </div>
    );
  }
}

export default TopBar;
