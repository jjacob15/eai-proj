/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Menu from './Menu';
import { onSideBarMenuSelected } from '../../actions';
import { SET_MENU } from '../../constants/types';
import menu from '../../constants/menu';
import { Link } from 'react-router-dom';

class SideBarContent extends Component {
  constructor() {
    super();
    this.state = {
      selectedSubMenuId: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({
      selectedSubMenuId: item.content ? item.id : 0,
    });
  }

  renderNavLabel(label, idx) {
    const { menu } = this.props;
    if (menu.back && idx === 0) {
      return (
        <Link className="nav-label-back" to={menu.back.link}>
          {this.renderBack()}
          {label}
        </Link>
      );
    } else {
      return <div className="nav-label">{label}</div>;
    }
  }
  renderBack() {
    return (
      <span className="micron" style={{ marginRight: '5px' }}>
        <i className="ti-angle-left" />
      </span>
    );
  }
  render() {
    const { menu, location } = this.props;
    const { selectedSubMenuId } = this.state;

    return (
      <div className="main-menu">
        {menu.content.map((s, h) => (
          <div key={h}>
            {this.renderNavLabel(s.label, h)}
            <ul className="left-item">
              {s.content.map((item, i) => (
                <Menu
                  item={item}
                  key={i}
                  handleClick={this.handleClick}
                  selectedSubMenuId={selectedSubMenuId}
                  location={location.pathname}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

module.exports = withRouter(SideBarContent);
