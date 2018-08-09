/**
 * Created by Jaison.Jacob on 7/13/2018.
 */
import React from 'react';
import SideBar from './sidebar/Sidebar';
import Landing from './landing/Landing';

const MainContainer = props => (
  <div className="main-container">
    <SideBar {...props} />
    <Landing {...props} />
  </div>
);

export default MainContainer;
