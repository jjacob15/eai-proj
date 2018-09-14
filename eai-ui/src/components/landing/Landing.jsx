import React from 'react';
import Home from '../home';
import IApply from '../iApply'
import IExtract from '../iExtract'
import IPlan from '../iPlan'
import IModel from '../iModel'
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.resizeTriggered = this.resizeTriggered.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeTriggered);
    this.resizeTriggered();
    // this.props.setLandingMenu();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeTriggered);
  }

  resizeTriggered() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    const y = w.innerHeight || e.clientHeight || g.clientHeight;
    this.setState({
      height: y - 76,
    });
  }

  render() {
    const { nav } = this.props;
    return (
      <div
        className="landing-content"
        style={{ marginLeft: nav.displaySideBar && !nav.isSmallDevice ? '255px' : '0px' }}>
        <div className="landing-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="row">
                <div className="col-xl-12">
                  <Route exact path="/" render={(rProps) => <Home {...this.props} />} />
                  <Route path="/iapply" render={(rProps) => <IApply {...this.props} />} />
                  <Route path="/iextract" render={(rProps) => <IExtract {...this.props} />} />
                  <Route path="/iplan" render={(rProps) => <IPlan {...this.props} />} />
                  <Route path="/imodel" render={(rProps) => <IModel {...this.props} />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = withRouter(Landing);

