import React from 'react';
import AboutEai from './aboutEai';
import Login from './login';
import Extract from './IExtractLink';
import ReviewLink from './ReviewLink';
import Model from './IModelLink';
import Plan from './IPlanLink';
import { connect } from 'react-redux';
import { onSideBarMenuSelected } from '../../actions';
import { getLink } from '../../constants/menu';

class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-7 col-lg-7">
            <AboutEai />
          </div>
          <div className="col-md-5 col-lg-5">
            <Login />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <Extract />
          </div>
          <div className="col-md-3 col-lg-3">
            <Model />
          </div>
          <div className="col-md-3 col-lg-3">
            <ReviewLink />
          </div>
          <div className="col-md-3 col-lg-3">
            <Plan />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = HomeContainer;
