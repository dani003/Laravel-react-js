import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import {Navbar, Button, NavDropdown, Navm, Card} from 'react-bootstrap';

class LoginInfoPidi extends Component {
  render() {
    return(
      <div className="App">
          <div className='LoginInfoPidi'>
          <div className='cuadrado'></div>
            <Card className='CardLoginInfoPidi'>
                <div className='TextoInfoPidi'>
                  Este programa de investigación multidisciplinaria se focaliza en el desarrollo de conocimientos con impacto directo en la sociedad el cual, mediante una gestión orientada a la productividad académica y científica de alto nivel, genera proyectos, publicaciones y otros productos de relevancia en el marco de responsabilidad social y aporte tecnológico.
                </div>
            </Card>
          </div>
      </div>
    );
  }
}

export default LoginInfoPidi;
