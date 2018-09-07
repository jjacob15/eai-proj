/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { onSideBarMenuSelected } from '../../actions';
import { SET_MENU } from '../../constants/types';
import menuContent from '../../constants/menuContent';

class SideBarContent extends Component {
  constructor() {
    super();
    this.handleMenuBack = this.handleMenuBack.bind(this);
  }
  handleMenuBack() {
    const { handleMenuBack, menu } = this.props;
    handleMenuBack(menu.back);
  }
  renderNavLabel(label) {
    const { menu } = this.props;
    if (menu.back) {
      return (
        <div className="nav-label-back" onClick={this.handleMenuBack}>
          {this.renderBack()}
          {label}
        </div>
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
    const { onMenuSelected } = this.props;
    const { menu } = this.props;
    return (
      <div className="main-menu">
        {menu.content.map((s, h) => (
          <div key={h}>
            {this.renderNavLabel(s.label)}
            <ul className="left-item">
              {s.content.map((item, i) => (
                <Menu item={item} key={i} menu={menu} onMenuSelected={onMenuSelected} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    onMenuSelected: item => dispatch(onSideBarMenuSelected(item)),
    handleMenuBack: item => dispatch({ type: SET_MENU, content: menuContent[item] }),
  };
}

export default connect(
  () => ({}),
  actions
)(SideBarContent);
