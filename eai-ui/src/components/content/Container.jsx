import React from 'react';
import IExtract from './IExtract';
import IApply from './iapply/IApply';
import IModel from './IModel';
import IPlan from './IPlan';

export default class Container extends React.Component {
  render() {
    const { nav } = this.props;

    switch (nav.menu.selected.id) {
      case 5:
        return <IExtract />;
      case 6:
        return <IModel />;
      case 7:
        return <IApply />;
      case 8:
        return <IPlan />;
      default:
        return <IExtract />;
    }
  }
}
