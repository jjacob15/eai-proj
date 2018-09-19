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
          <i className="fa fa-chart-line text-c-green d-block f-40 m-l-20" />
          <h4 className="m-l-20" style={{ lineHeight: '40px' }}>
            iModel
          </h4>
        </div>
        <div className="m-t-25">
          <Accordian title="Simple Regression">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Ordinary Least Square" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Ordinary Least Square</h6>
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
                      <img alt="Constrained Regression" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Constrained Regression</h6>
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

          <Accordian title="Hierarchical Linear Model">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Fixed Effects" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Fixed Effects</h6>
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
                      <img alt="Random Effects" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Random Effects</h6>
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
                      <img alt="Mixed Effects" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Mixed Effects</h6>
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
                      <img alt="Non-linear Mixed Constrained Effects" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Non-linear Mixed Constrained Effects</h6>
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

          <Accordian title="Logistic Regression">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Probit Models" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Probit Models</h6>
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

          <Accordian title="Other Regressions">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Lasso" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Lasso</h6>
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
                      <img alt="Ridge Regression" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Ridge Regression</h6>
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
                      <img alt="Elastic Net" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Elastic Net</h6>
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
                      <img alt="Partial Least Squares" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Partial Least Squares</h6>
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

          <Accordian title="Testing">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="ANOVA" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">ANOVA</h6>
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
                      <img alt="ANCOVA" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">ANCOVA</h6>
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
                      <img alt="Heuristics" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Heuristics</h6>
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
                      <img alt="Bass Diffusion Models" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Bass Diffusion Models</h6>
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

          <Accordian title="Other Techniques">
            <div className="card">
              <div className="card-block">
                <ul className="feed-blog">
                  <li className="active-feed">
                    <div className="feed-user-img">
                      <img alt="Market Basket Analysis" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Market Basket Analysis</h6>
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
                      <img alt="Principle Component Analysis" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Principle Component Analysis</h6>
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
                      <img alt="Propensity Models" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Propensity Models</h6>
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
                      <img alt="Markov Chain" src={img} className="img-radius" />
                    </div>
                    <h6 className="m-b-0">Markov Chain</h6>
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
