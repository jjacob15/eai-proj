import React, { Component } from 'react';
import { HOME_OPT_BTN_LAYOUT, TC_OPT_BTN_LAYOUT } from '../../constants/types';
import Landing from './Landing';
import TestControl from './TestControl';

export default class OptionButton extends Component {
  render() {
    const { nav } = this.props;
    switch (nav.optBtnLayout) {
      case HOME_OPT_BTN_LAYOUT:
        return <Landing />;
      case TC_OPT_BTN_LAYOUT:
        return <TestControl {...this.props} />;
      default:
        return <Landing />;
    }
  }
}
