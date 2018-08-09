import React from 'react';
import cx from 'classnames';

export class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    const { onSelect, item } = this.propsl;
    onSelect(item);
  }

  render() {
    const { item, active } = this.props;
    const c = cx({
      'nav-link': true,
      active,
    });
    return (
      <li className="nav-item" onClick={() => this.onSelect()} onKeyPress={() => this.onSelect()}>
        <a className={c}>{item.label}</a>
        <div className="slide" />
      </li>
    );
  }
}
