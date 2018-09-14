import React from 'react';
import Tab from './Tab';

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const { handleClick } = this.props;
    handleClick(i);
  }

  render() {
    const { nav } = this.props;
    return (
      <ul className="nav nav-tabs md-tabs">
        {nav.landingMenu.content.map((m, i) => (
          <Tab item={m} active={nav.landingMenu.selected.id === m.id} key={i} handleClick={this.handleClick} />
        ))}
      </ul>
    );
  }
}
