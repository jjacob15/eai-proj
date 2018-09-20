import React from 'react';
import { connect } from 'react-redux';
import Accordian from '../../ui/accordian';
import { Card } from './Card';
import { APPLY_APP_TC, APPLY_APP_NPL } from '../../../constants/iapplyApps';
import { setApplyApp, onSideBarMenuSelected } from '../../../actions';

function actions(dispatch) {
  return {
    onEnter: app => dispatch(setApplyApp(app)),
    // updateMenu: () => dispatch(onSideBarMenuSelected({ id: 7 })),
  };
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
  }
  componentDidMount() {
    // this.props.updateMenu();
  }

  onEnter(app) {
    this.props.onEnter(app);
  }

  render() {
    const img = require('../../../../assets/images/avatar-4.jpg');
    return (
      <div>
        <div className="row">
          <i className="fa fa-calendar-alt text-c-green d-block f-40 m-l-20" />
          <h4 className="m-l-20" style={{ lineHeight: '40px' }}>
            Plan
          </h4>
        </div>
        <div className="m-t-25">
          <Accordian title="Marketing Effectiveness">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Digital Media Effectiveness">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Pricing Effectiveness">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Trade Promotion Optimization">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Market Testing">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Assortment & Space Analytics">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Customer Analytics">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Employee Engagement Analytics">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Operations Analytics">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Supply Chain Analytics">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>

          <Accordian title="Custom Reports">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Consumer Pathway" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Consumer Pathway</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                  <li className="diactive-feed">
                    <div className="feed-user-img">
                      <img alt="Digital Media ROI" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Digital Media ROI</h6>
                    <p className="text-muted m-b-15 m-t-5 small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="row">
                      <div className="col-auto">
                        <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-info-circle text-c-green d-block f-20" />
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-upload text-c-yellow d-block f-20" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Accordian>
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  actions
)(Page);
