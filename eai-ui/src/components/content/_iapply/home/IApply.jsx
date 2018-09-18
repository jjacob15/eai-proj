import React from 'react';
import { connect } from 'react-redux';
import Accordian from '../../../ui/accordian';
import { Card } from './Card';
import { APPLY_APP_TC, APPLY_APP_NPL } from '../../../../constants/iapplyApps';
import { setApplyApp } from '../../../../actions';

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
        <div className="row">
          <i className="fa fa-globe text-c-green d-block f-40 m-l-20" />
          <h4 className="m-l-20">iApply</h4>
        </div>
        <div className="m-t-25">
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
            </div>
          </Accordian>

          <Accordian title="Digital Media Effectiveness">
            <div className="card">
              <div className="card-block">
                <ul class="feed-blog">
                  <li class="active-feed">
                    <div class="feed-user-img">
                      <img
                        alt="Digital Media ROI"
                        src={require('../../../../../assets/images/avatar-4.jpg')}
                        className="img-radius"
                      />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p class="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i class="fa fa-sign-in text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i class="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i class="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li class="active-feed">
                    <div class="feed-user-img">
                      <img
                        alt="Consumer Pathway"
                        src={require('../../../../../assets/images/avatar-4.jpg')}
                        className="img-radius"
                      />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p class="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i class="fa fa-sign-in text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i class="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i class="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li class="diactive-feed">
                    <div class="feed-user-img">
                      <img
                        alt="Digital Media ROI"
                        src={require('../../../../../assets/images/avatar-4.jpg')}
                        className="img-radius"
                      />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p class="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i class="fa fa-sign-in text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i class="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i class="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Pricing Effectiveness">
            <div className="row m-t-20">
              <ul class="feed-blog">
                <li class="active-feed">
                  <div class="feed-user-img">
                    <img
                      alt="Digital Media ROI"
                      src={require('../../../../../assets/images/avatar-4.jpg')}
                      className="img-radius"
                    />
                  </div>
                  <h6 className="m-b-0">Digital Media ROI</h6>
                  <p class="text-muted m-b-15 m-t-5 small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="row">
                    <div className="col-auto">
                      <i class="fa fa-sign-in text-c-blue d-block f-20" />
                    </div>
                    <div className="col-auto">
                      <i class="fa fa-info-circle text-c-green d-block f-20" />
                    </div>
                    <div className="col-auto">
                      <i class="fa fa-upload text-c-yellow d-block f-20" />
                    </div>
                  </div>
                </li>
                <li class="active-feed">
                  <div class="feed-user-img">
                    <img
                      alt="Consumer Pathway"
                      src={require('../../../../../assets/images/avatar-4.jpg')}
                      className="img-radius"
                    />
                  </div>
                  <h6 className="m-b-0">Consumer Pathway</h6>
                  <p class="text-muted m-b-15 m-t-5 small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="row">
                    <div className="col-auto">
                      <i class="fa fa-sign-in text-c-blue d-block f-20" />
                    </div>
                    <div className="col-auto">
                      <i class="fa fa-info-circle text-c-green d-block f-20" />
                    </div>
                    <div className="col-auto">
                      <i class="fa fa-upload text-c-yellow d-block f-20" />
                    </div>
                  </div>
                </li>
                <li class="diactive-feed">
                  <div class="feed-user-img">
                    <img
                      alt="Digital Media ROI"
                      src={require('../../../../../assets/images/avatar-4.jpg')}
                      className="img-radius"
                    />
                  </div>
                  <h6 className="m-b-0">Digital Media ROI</h6>
                  <p class="text-muted m-b-15 m-t-5 small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="row">
                    <div className="col-auto">
                      <i class="fa fa-sign-in text-c-blue d-block f-20" />
                    </div>
                    <div className="col-auto">
                      <i class="fa fa-info-circle text-c-green d-block f-20" />
                    </div>
                    <div className="col-auto">
                      <i class="fa fa-upload text-c-yellow d-block f-20" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Accordian>

          <Accordian title="Trade Promotion Optimization">
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
            </div>
          </Accordian>

          <Accordian title="Assortment & Space Analytics">
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
            </div>
          </Accordian>

          <Accordian title="Employee Engagement Analytics">
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
            </div>
          </Accordian>

          <Accordian title="Operations Analytics">
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
            </div>
          </Accordian>

          <Accordian title="Supply Chain Analytics">
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
            </div>
          </Accordian>

          <Accordian title="Custom Reports">
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
            </div>
          </Accordian>
        </div>
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
