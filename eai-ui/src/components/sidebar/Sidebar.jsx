/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import velocity from 'velocity-animate';
import { SET_SELECTED_MENU } from '../../constants/types';
import Menu from './Menu';
import { onSideBarMenuSelected } from '../../actions';

class SideBar extends Component {
  constructor() {
    super();
    this.el = React.createRef();
  }

  componentWillReceiveProps(nxtProps) {
    this.animateMe(nxtProps.status);
  }

  animateMe(status) {
    const el = this.el.current;

    if (status === 'exiting') velocity(el, { marginLeft: -260, opacity: 0 }, { duration: 250 });

    if (status === 'entering') velocity(el, { marginLeft: 0, opacity: 1 }, { duration: 250 });
  }

  render() {
    const { nav, onMenuSelected } = this.props;
    const { menu } = nav;
    return (
      <nav className="side-bar" ref={this.el}>
        <div className="main-menu">
          {menu.content.map((s, h) => (
            <div key={h}>
              <div className="nav-label">{s.label}</div>
              <ul className="left-item">
                {s.content.map((item, i) => (
                  <Menu item={item} key={i} menu={menu} onMenuSelected={onMenuSelected} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    );
  }
}

function actions(dispatch) {
  return {
    onMenuSelected: item => dispatch(onSideBarMenuSelected(item)),
  };
}

export default connect(
  () => ({}),
  actions
)(SideBar);
