import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";
import Clock from './clock/Clock.js';

class Dashboard extends Component {
    constructor() {
       super();
       const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "Noviembre", "December"];
       var today = new Date(),
           date = today.getDate() + ' de ' + monthNames[today.getMonth()] + 'del ' + today.getFullYear();
       var today = new Date(),
           month =  today.toLocaleString('default', { month: 'long' });
       var today = new Date(),
           day = today.getDate();
       var today = new Date(),
           year = today.getFullYear();
       this.state = {
           date: date,
           mes: month,
           dia: day,
           anio: year
       };
   }
  render() {

      return (
        <div>
            <div className="Dashboard">
                <div className="bp3-card bp3-elevation-2 cuadradoCard dateStyle">
                    <h6 className="mesDate centerStyle">{this.state.mes}</h6>
                    <h2 className="centerStyle diaDate">{this.state.dia}</h2>
                    <h6 className="centerStyle">{this.state.anio}</h6>
                </div>
                <div className="clockWidth">
                    <Clock></Clock>
                </div>
            </div>
      </div>
    );
  }
}
export default Dashboard;
