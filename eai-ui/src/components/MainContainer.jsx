/**
 * Created by Jaison.Jacob on 7/13/2018.
 */
import React from 'react';
import { Transition } from 'react-transition-group';
import SideBar from './sidebar/Sidebar';
import Landing from './landing/Landing';

const MainContainer = props => {
  const { nav } = props;
  const { displaySideBar } = nav;

  return (
    <div className="main-container">
      <Transition in={displaySideBar} timeout={250}>
        {status => <SideBar status={status} {...props} />}
      </Transition>
      <Landing {...props} />
    </div>
  );
};

export default MainContainer;
