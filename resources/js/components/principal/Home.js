import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import {Navbar, Button, NavDropdown, Navm, Card} from 'react-bootstrap';
import TopBar from './../secondary/All/TopBar.js';
import MenuBar from './../secondary/All/MenuBar.js';
import FirstButton from './../secondary/Home/FirstButton.js';
import SecondButton from './../secondary/Home/SecondButton.js';
import ThirdButton from './../secondary/Home/ThirdButton.js';



class Home extends Component {
  render() {
    return(
      <div className="App">
          <TopBar></TopBar>
          <MenuBar></MenuBar>
          <div className='BotonesHorario'>
            <Link to="/VisualizarReservas">
                <FirstButton></FirstButton>
            </Link>
            <Link to="/CancelarReservas">
              <ThirdButton></ThirdButton>
            </Link>
          </div>
      </div>
    );
  }
}

export default Home;
