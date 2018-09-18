import React from 'react';
import classnames from 'classnames';
import Table from './table/Table';

const Link = ({ title, isActive, handleOnClick, idx }) => {
  const cx = classnames({
    'nav-link': true,
    active: isActive,
  });
  return (
    <li className="nav-item" onClick={() => handleOnClick(idx)}>
      <span className={cx} role="tab">
        {title}
      </span>
    </li>
  );
};

const links = ['Tests', 'Analysis', 'Compare'];

export default class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 0,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(idx) {
    this.setState({
      active: idx,
    });
  }
  renderViews() {
    switch (this.state.active) {
      case 0:
        return <Table />;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        <div className="row spacedRow">
          <div className="col-md-12 col-lg-12">
            <ul className="nav nav-tabs  tabs" role="tablist">
              {links.map((l, i) => (
                <Link key={i} idx={i} title={l} isActive={i === this.state.active} handleOnClick={this.handleOnClick} />
              ))}
            </ul>
          </div>
        </div>
        {this.renderViews()}
      </div>
    );
  }
}
