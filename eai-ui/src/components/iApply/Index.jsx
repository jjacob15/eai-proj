import React, { Component } from 'react';
import IApply from './home/IApply';
import { APPLY_APP_TC } from '../../constants/iapplyApps';

export default class Index extends Component {
  render() {
    const { iapply } = this.props;
    console.log(this.props);
    switch (iapply.common.app) {
      default:
        return <IApply />;
    }
  }
}
