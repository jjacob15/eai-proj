/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { SET_SELECTED_MENU } from '../../constants/types';
import Menu from './Menu';

const mapProps = disptach => ({
  onMenuSelected: item => {
    disptach({ type: SET_SELECTED_MENU, item });
  },
});

const SideBar = props => {
  const { nav, onMenuSelected } = props;
  const { displaySideBar, menu } = nav;
  const c = cx({
    'side-bar': true,
    'side-bar-sm': !displaySideBar,
  });

  return (
    <nav className={c}>
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
};

export default connect(
  () => ({}),
  mapProps
)(SideBar);
