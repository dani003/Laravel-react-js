import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";

class Dashboard extends Component {
    constructor() {
       super();

       var today = new Date(),
           date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

       this.state = {
           date: date
       };
   }
  render() {
      return (
        <div>
            <div className="Dashboard">
                <div className="bp3-card bp3-elevation-2 bp3-interactive cuadradoCard">
                    <h6>Equipo mas reservado</h6>
                </div>
                <div className="bp3-card bp3-elevation-2 bp3-interactive cuadradoCard">
                    <h6>Mis reservas activas</h6>
                    <h1>3</h1>
                </div>
                <div className="bp3-card bp3-elevation-2 bp3-interactive cuadradoCard">
                    <h6>Equipo mas reservado</h6>
                    <p>
                      {this.state.date}
                    </p>
                </div>
            </div>
      </div>
    );
  }
}
export default Dashboard;
