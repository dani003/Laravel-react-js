import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";
import Hours from './Hours.js';
import Minutes from './Minutes.js';
import Seconds from './Seconds.js';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state={
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    const deg = 6;
    const hr = document.getElementById('hr');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    let day = this.state.date;
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    this.setState({
      date: new Date()
    });

    hr.style.transform = 'rotateZ('+(hh+(mm/12))+'deg)';
    min.style.transform = 'rotateZ('+mm+'deg)';
    sec.style.transform = 'rotateZ('+ss+'deg)';
  }

  render() {
    return(
    <div className="clock">
        <h4 id="digital">{this.state.date.toLocaleTimeString()}</h4>
        <Hours />
        <Minutes />
        <Seconds />
    </div>
    );
  }
}

export default Clock;
