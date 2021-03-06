/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React, { Component } from 'react';
import velocity from 'velocity-animate';
import SideBarContent from './SideBarContent.jsx';
import { Route } from 'react-router-dom';
import menu from '../../constants/menu';
import { reviewPath, reviewTestPath } from '../../constants/links';

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
    const { nav } = this.props;
    // const { menu } = nav;
    return (
      <nav className="side-bar" ref={this.el}>
        <Route exact path="/" render={() => <SideBarContent menu={menu.main} />} />
        <Route exact path={reviewPath} render={() => <SideBarContent menu={menu.mainApp} />} />
        <Route path={reviewTestPath} render={() => <SideBarContent menu={menu.reivewTestApp} />} />
        <Route path="/imodel" render={() => <SideBarContent menu={menu.mainApp} />} />
        <Route path="/iextract" render={() => <SideBarContent menu={menu.mainApp} />} />
        <Route path="/iplan" render={() => <SideBarContent menu={menu.mainApp} />} />
        <Route render={() => <SideBarContent menu={menu.main} />} />
      </nav>
    );
  }
}

export default SideBar;
