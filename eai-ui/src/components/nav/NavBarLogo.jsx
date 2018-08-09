/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { TOGGLE_HEADER_NAVBAR, TOGGLE_SIDEBAR } from '../../constants/types';

const mapProps = dispatch => ({
  showMore: () => {
    dispatch({ type: TOGGLE_HEADER_NAVBAR });
  },
  toggleSideBar: () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  },
});

const NavBarLogo = props => {
  const { isSmallDevice, toggleSideBar, showMore } = props;
  const c = cx({
    'navbar-logo': true,
    'navbar-logo-sm': isSmallDevice,
  });
  const m = cx({
    'mobile-menu': true,
    'mobile-menu-sm': isSmallDevice,
  });
  const o = cx({
    'mobile-options': true,
    'mobile-options-sm': isSmallDevice,
  });
  return (
    <div className={c}>
      <a className={m} onClick={toggleSideBar} onKeyDown={toggleSideBar} title="Collapse the Navigation Panel">
        <i className="ti-menu" />
      </a>
      <a>
        <img className="img-fluid" src={require('../../../assets/images/logo.png')} alt="EAi" />
      </a>
      <a className={o} onClick={showMore} onKeyDown={showMore}>
        <i className="ti-more" />
      </a>
    </div>
  );
};

export default connect(
  () => ({}),
  mapProps
)(NavBarLogo);
