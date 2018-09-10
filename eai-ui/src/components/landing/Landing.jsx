import React from 'react';
import { connect } from 'react-redux';
import TabContainer from './nav/TabContainer';
import Container from '../content/Container';
import { setLandingMenu } from '../../actions';
// import OptionButtons from '../optionButtons';

// function actions(dispatch) {
//   return {
//     setLandingMenu: () => dispatch(setLandingMenu()),
//   };
// }

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
    const { height } = this.state;
    return (
      <div
        className="landing-content"
        style={{ marginLeft: nav.displaySideBar && !nav.isSmallDevice ? '255px' : '0px' }}>
        <div className="landing-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="row">
                <div className="col-xl-12">
                  <Container {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = Landing;
// export default connect(
//   () => ({}),
//   actions
// )(Landing);
