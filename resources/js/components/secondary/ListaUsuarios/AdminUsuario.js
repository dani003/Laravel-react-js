import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import {Navbar, Button, NavDropdown, Navm, Card} from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class AdminUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
          email: cookies.get('email')
        };
      }


  render() {
      if(this.state.email != 'admin@utem.cl'){
         return <div></div>;
      }else{
    return(
        <div class='botonesAdminUsuario'>
            <Link to="/CrearNuevoUsuario">
                <button type="button" class="bp3-button bp3-icon-new-object  bp3-intent-success botonGestionUsuario">Crear Usuario</button>
            </Link>
            <Link to="/EliminarUsuario">
                <button type="button" class="bp3-button bp3-icon-remove bp3-intent-success botonGestionUsuario">Eliminar Usuario</button>
            </Link>
        </div>
    );
  }
}
}

export default AdminUsuario;
