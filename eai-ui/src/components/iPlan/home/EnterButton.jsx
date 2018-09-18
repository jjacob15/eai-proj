import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter() {
    this.props.onEnter(this.props.app || null);
  }

  render() {
    return (
      <button
        type="button"
        title="Enter"
        className="btn btn-sm btn-grd-success"
        onClick={this.onEnter}
        onKeyPress={this.onEnter}>
        Enter
      </button>
    );
  }
}
