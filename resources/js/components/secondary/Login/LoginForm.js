import React, { Component } from 'react';
import { Link} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LoginForm extends Component {

constructor(props) {
super(props);
this.state = {
    correo: '',
};

this.handleChange = this.handleChange.bind(this);

}

    handleChange(event) {
        const { correo } = this.state;
        this.setState({correo: event.target.value});
        localStorage.setItem('correo', event.target.value);
        cookies.set('email', event.target.value);
    }

  render() {

    return (
        <div className='homeP'>
            <div>
                <img className="imgLogoUtemLogin" src="http://sitios.vtte.utem.cl/principal/wp-content/uploads/sites/2/2017/03/marca-utem-horizontal.jpg"></img>
            </div>
                <Form className='InputLogin'>
                  <Form.Group>
                <Form.Control className="PlaceHolderLoginForm" type="email" placeholder="Ingresar correo" name="correo" required value={this.state.correo} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                <Form.Control className="PlaceHolderLoginForm" type="password" placeholder="Ingresar contraseña" required />
                  </Form.Group>
                  <Link to="/">
                      <Button className='BotonIngreso ' type="submit">
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
