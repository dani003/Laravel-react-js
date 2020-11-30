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

  constructor(props)
  {
    super(props);
    this.state={
      firstname: '',
      lastname: '',
      email:'',
      edit:false,
      User:[],
      IsLoaded:true,
      logged:true,
    };
    this.editItem= this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

componentWillMount() {
  if (document.cookie) {
  this.setState({
    logged:true })
}
}
componentDidMount(){
  if (document.cookie) {
    this.setState({ logged:true })
  }
  fetch("http://localhost:3002/api/user/admin@domergy.cl")
  .then(res => res.json())
  .then(json => {
    this.setState({
      IsLoaded:true,
      User:json,
    })
    this.GetUser();
    console.log(this.state.User.user)
  });
}

GetUser(){
  this.setState({
    firstname: this.state.User.user.firstname,
    lastname: this.state.User.user.lastname,
    email: this.state.User.user.email
  })
}

GetUser2(){
  this.setState({
    User: {
      user:{
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email
      }
    }
  })
}

handleChange(event){
  this.setState({[event.target.name]: event.target.value});
}

editItem(edit){
  this.setState({edit: !this.state.edit});
  this.GetUser2()
}

  render() {
    var {IsLoaded, User, edit}=this.state;
    const {logged}=this.state
    if(!IsLoaded){
      return <div>Loading...</div>;
    }
    else
    {
      return (
      <div className="GestionPerfilBox">
        <div>
        {(edit) ? (
          <div>
          <div className="cardProfile1">
              <div class="bp3-navbar BarraTituloPerfil">
                <div class="bp3-navbar-group bp3-align-left ">
                  <div><h2>Perfil de usuario </h2></div>
                </div>
              </div>
            <ButtonGroup minimal={true} >
           </ButtonGroup>
          </div>
            <Card  elevation={Elevation.TWO} className="cardProfile">
            <div className="imgProfileBox">
                <img className="imgProfile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"></img>
                <FileInput text='Ingresar imagen...' buttonText="Buscar" />
            </div>
              <div className="infoProfile ProfileTittles">
                <FormGroup
                  label="Nombres"
                  labelFor="text-input">

                  <InputGroup className="ProfileInput" name='firstname' id="text-input" onChange={ this.handleChange }
                  placeholder="Ingresar Nombre" Value={this.state.firstname}/>
                  {console.log(this.state.firstname)}
                </FormGroup>
                <FormGroup
                  label="Apellidos"
                  labelFor="text-input">
                  <InputGroup className="ProfileInput" name='lastname' id="text-input" onChange={ this.handleChange }
                  placeholder="Ingresar Apellidos" Value={this.state.lastname}/>
                </FormGroup>
                <FormGroup
                  label="Cargo"
                  labelFor="text-input">
                  <InputGroup className="ProfileInput" name='cargo' id="text-input" onChange={ this.handleChange }
                  placeholder="Ingresar Cargo" Value={this.state.cargo}/>
                </FormGroup>
                <FormGroup
                  label="Email"
                  labelFor="text-input">
                  <InputGroup className="ProfileInput" name='email' id="text-input"  placeholder="Ingresar Email" disabled Value={this.state.email}/>
                </FormGroup>
                <FormGroup
                  label="Descripcion"
                  labelFor="text-input">
                  <InputGroup className="ProfileInput" name='lastname' id="text-input" onChange={ this.handleChange }
                  placeholder="Ingresar descripcion" Value={this.state.descripcion}/>
                </FormGroup>
                <FormGroup
                  label="Ingresar contraseña"
                  labelFor="text-input">
                  <InputGroup className="ProfileInput" name='email' id="text-input"  placeholder="Ingresar Contraseña" Value={this.state.email}/>
                </FormGroup>
                <FormGroup
                  label="Ingresar contraseña nuevamente"
                  labelFor="text-input">
                  <InputGroup className="ProfileInput" name='email' id="text-input"  placeholder="Ingresar Contraseña nuevamente" Value={this.state.email}/>
                </FormGroup>
                <Button type="button" class="bp3-button bp3-icon-add " intent="success" onClick={this.editItem.bind(this)} >Cancelar</Button>
                <Button type="button" class="bp3-button bp3-icon-add " intent="success" onClick={this.editItem.bind(this)} >Editar</Button>
            </div>
            <div>
            </div>
            </Card>
        </div>):
      (<div className="content">
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
              <button type="button" class="bp3-intent-success bp3-button bp3-icon-edit" intent="success" onClick={this.editItem.bind(this)} >Editar</button>
          </div>
          <div className="opcionesPerfil">
              <div className="RectanguloCard bp3-card bp3-interactive">
                  <h6>Reservas Activas</h6>
              </div>
              <Link to="/PerfilHistorial">
                  <div className="RectanguloCard bp3-card bp3-interactive">
                      <h6>Historial de reservas</h6>
                  </div>
              </Link>
          </div>
        </Card>
    </div>)}
  </div>
      </div>
    );
  }
  }
}

export default GestionPerfil;
