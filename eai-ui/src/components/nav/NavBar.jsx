import React from 'react';
import NavBarLogo from './NavBarLogo';
import NavRight from './NavRight';

const NavBar = props => {
  const { nav } = props;
  return (
    <nav className="header-navbar" header-theme="theme1">
      <div>
        <NavBarLogo {...nav} />
        <div className="navbar-container container-fluid">
          <NavRight {...props} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
