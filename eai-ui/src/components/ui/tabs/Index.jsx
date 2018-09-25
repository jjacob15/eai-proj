import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const IconStyle = function(fromStyle) {
  return {
    ...fromStyle,
    fontSize: '20px',
  };
};
const Icon = ({ className, style, title, onClick }) => (
  <div style={IconStyle(style)} title={title} onClick={onClick}>
    <i className={className} />
  </div>
);

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleTabAdd = this.handleTabAdd.bind(this);
  }

  handleClick(i) {
    const { handleSelected } = this.props;
    handleSelected(i);
  }
  handleTabAdd() {
    this.props.handleTabAdd();
  }

  render() {
    const { items, active } = this.props;
    return (
      <div>
        <ul className="nav nav-tabs md-tabs">
          {items.map((m, i) => (
            <Tab item={m} active={active} key={i} handleClick={this.handleClick} />
          ))}
          <Icon
            className="ti-plus text-c-blue"
            style={{ marginTop: '2px', marginLeft: '23px', cursor: 'pointer' }}
            title="Add a program"
            onClick={this.handleTabAdd}
          />
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  active: PropTypes.number.isRequired,

  handleSelected: PropTypes.func.isRequired,
  handleTabAdd: PropTypes.func.isRequired,
};
