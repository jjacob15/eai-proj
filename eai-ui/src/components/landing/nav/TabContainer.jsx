import React from 'react';
import { Tab } from './Tab';

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(i) {
    this.props.onSelect(i);
  }

  render() {
    const { nav } = this.props;
    return (
      <ul className="nav nav-tabs md-tabs">
        {nav.menu.content[1].content.map((m, i) => (
          <Tab item={m} active={nav.menu.selected.id === m.id} key={i} onSelect={this.onSelect} />
        ))}
      </ul>
    );
  }
}

export default TabContainer;
