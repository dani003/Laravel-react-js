import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";


class Minutes extends Component {
  render() {
    return (
      <div className="minute">
        <div className="min" id="min">
        </div>
      </div>
    )
  }
}

export default Minutes;
