/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { onSideBarMenuSelected } from '../../actions';
import { SET_MENU } from '../../constants/types';
import menu from '../../constants/menu';

class SideBarContent extends Component {
  constructor() {
    super();
    this.handleMenuBack = this.handleMenuBack.bind(this);
    this.handleMenuSelected = this.handleMenuSelected.bind(this);
  }

  handleMenuBack() {
    const { handleMenuBack, menu } = this.props;
    handleMenuBack(menu.back);
  }

  handleMenuSelected(item) {
    console.log(item);
  }

  renderNavLabel(label, idx) {
    const { menu } = this.props;
    if (menu.back && idx === 0) {
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
    // const { onMenuSelected } = this.props;
    const { menu } = this.props;
    console.log(this.props);
    return (
      <div className="main-menu">
        {menu.content.map((s, h) => (
          <div key={h}>
            {this.renderNavLabel(s.label, h)}
            <ul className="left-item">
              {s.content.map((item, i) => (
                <Menu item={item} key={i} menu={menu} onMenuSelected={this.handleMenuSelected} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

//
// function actions(dispatch) {
//   return {
//     onMenuSelected: item => dispatch(onSideBarMenuSelected(item)),
//     handleMenuBack: item => dispatch({ type: SET_MENU, content: menu[item] }),
//   };
// }

// export default connect(
//   () => ({}),
//   actions
// )(SideBarContent);
module.exports = SideBarContent;
