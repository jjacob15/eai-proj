import React, { Component } from 'react';
import velocity from 'velocity-animate';

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
      <div className="padded-buttons" ref={this.el}>
        {this.props.children}
      </div>
    );
  }
}
