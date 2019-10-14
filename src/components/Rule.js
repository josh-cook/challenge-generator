import React, { Component } from "react";

export default class Rule extends Component {
  render() {
    return (
      <div className="rule">
        <div className="rule-type">{this.props.type}:</div>
        <span className="value-container">{this.props.children}</span>
      </div>
    );
  }
}
