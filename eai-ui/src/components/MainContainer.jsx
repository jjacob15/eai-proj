/**
 * Created by Jaison.Jacob on 7/13/2018.
 */
import React from 'react';
import SideBar from './sidebar/Sidebar';

const MainContainer = props => (
  <div className="main-container">
    <SideBar {...props} />
  </div>
);

export default MainContainer;
