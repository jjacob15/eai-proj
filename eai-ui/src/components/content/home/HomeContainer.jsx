import React from 'react';
import AboutEai from './aboutEai';
import Login from './login';
import Extract from './IExtractLink';
import Apply from './IApplyLink';
import Model from './IModelLink';
import Plan from './IPlanLink';
import { connect } from 'react-redux';
import { onSideBarMenuSelected } from '../../../actions';
import { getLink } from '../../../constants/menu';

function actions(dispatch) {
  return {
    handleClick: fromId => dispatch(onSideBarMenuSelected(getLink(fromId))),
  };
}

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(fromId) {
    this.props.handleClick(fromId);
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
            <Apply onClick={this.handleClick} />
          </div>
          <div className="col-md-3 col-lg-3">
            <Plan />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = connect(
  () => ({}),
  actions
)(HomeContainer);
