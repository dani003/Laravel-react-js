import React, { Component } from 'react';
import { Link} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

class LoginForm extends Component {
  render() {
    return (
        <div className='homeP'>
            <div>
                <img className="imgLogoUtemLogin" src="http://sitios.vtte.utem.cl/principal/wp-content/uploads/sites/2/2017/03/marca-utem-horizontal.jpg"></img>
            </div>
                <Form class='InputLogin'>
                  <Form.Group
                      >
                    <Form.Label class='PlaceHolderLoginForm'>Ingrersar Correo</Form.Label>
                <Form.Control class="InputLogin" type="email" placeholder="correo" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label class='PlaceHolderLoginForm'>Ingresar Contraseña</Form.Label>
                <Form.Control class="InputLogin" type="password" placeholder="contraseña" />
                  </Form.Group>
                  <Link to="/">
                      <Button variant='BotonIngreso' type="submit">
                        Entrar
                      </Button>
                  </Link>
                </Form>
                <Link to="/">
                <p className='ColorGreen'>¿Olvido su contraseña?</p>
                </Link>
                <div class="LoginCard">
                  Para cualquier consulta envíe un correo a soporte.sisei@utem.cl
                </div>
        </div>
    );
  }
}

export default LoginForm;
//componente izquierdo del login. Aqhi va un recuadro con la imagen del pidi de fondo
// y sobre esta imagen, una capa de color transparente encima, donde habra informacion del pidi
