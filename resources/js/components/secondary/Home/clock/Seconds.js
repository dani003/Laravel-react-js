import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";

class Seconds extends Component {
  render() {
    return (
      <div className="second">
        <div className="sec" id="sec">
        </div>
      </div>
    )
  }
}

export default Seconds;
