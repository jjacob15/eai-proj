/**
 * Created by Jaison.Jacob on 7/13/2018.
 */
import React from 'react';
import { Transition } from 'react-transition-group';
import SideBar from './sidebar/Sidebar';
import Landing from './landing/Landing';

const MainContainer = props => {
  return (
    <div className="main-container">
      <SideBarWrapper {...props} />
      <Landing {...props} />
    </div>
  );
};

const SideBarWrapper = props => {
  const { nav } = props;
  const { displaySideBar } = nav;
  return (
    <Transition in={displaySideBar} timeout={250}>
      {status => <SideBar status={status} {...props} />}
    </Transition>
  );
};
export default MainContainer;
