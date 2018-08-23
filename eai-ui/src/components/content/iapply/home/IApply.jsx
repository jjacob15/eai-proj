import React from 'react';
import Accordian from '../../../ui/accordian';
import { Card } from './Card';
import { APPLY_APP_TC, APPLY_APP_NPL } from '../../../../constants/iapplyApps';
import { setApplyApp } from '../../../../actions';
import { connect } from 'react-redux';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
  }
  onEnter(app) {
    this.props.onEnter(app);
  }
  render() {
    return (
      <div>
        <Accordian title="Marketing Effectiveness">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
          </div>
        </Accordian>
        <Accordian title="Customer Analytics">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
          </div>
        </Accordian>
        <Accordian title="Pricing Analytics">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
          </div>
        </Accordian>
        <Accordian title="Market Testing">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card title="Test & Control" onEnter={this.onEnter} app={APPLY_APP_TC} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card title="New Product Launch" onEnter={this.onEnter} app={APPLY_APP_NPL} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
          </div>
        </Accordian>
        <Accordian title="Operational Analytics">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <Card onEnter={this.onEnter} />
            </div>
          </div>
        </Accordian>
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    onEnter: app => dispatch(setApplyApp(app)),
  };
}

export default connect(
  () => ({}),
  actions
)(Page);
