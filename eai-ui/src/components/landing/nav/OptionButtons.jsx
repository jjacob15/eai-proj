import React, { Component } from 'react';
import velocity from 'velocity-animate';

const Button = ({ iconClass, text }) => (
  <button className="btn btn-inverse btn-outline-inverse btn-sm" type="button">
    <i className={iconClass} />
    {text}
  </button>
);

export default class Buttons extends Component {
  constructor() {
    super();
    this.el = React.createRef();
  }

  componentWillReceiveProps(nxtProps) {
    this.animateThis(nxtProps.status);
  }

  animateThis(status) {
    if (status === 'entering') velocity(this.el, 'slideDown', { duration: 350, easing: 'ease' });

    if (status === 'exiting') velocity(this.el, 'slideUp', { duration: 350, easing: 'ease' });
  }

  render() {
    return (
      <div className="option-button" ref={this.el}>
        <Button iconClass="ti-help" text="Help" />
        <Button iconClass="ti-search" text="Find" />
        <Button iconClass="icofont icofont-user-alt-3" text="Sort" />
        <Button iconClass="ti-filter" text="Filter" />
        <Button iconClass="ti-zoom-in" text="Zoom" />
        <Button iconClass="ti-layout-grid3" text="Display" />
        <Button iconClass="ti-printer" text="Print" />
        <Button iconClass="ti-export" text="Export" />
        <Button iconClass="ti-save" text="Save View" />
      </div>
    );
  }
}
