import React from 'react';
import IExtract from './IExtract';
import IApply from './iapply';
import IModel from './IModel';
import IPlan from './IPlan';

export default class Container extends React.Component {
  render() {
    const { nav } = this.props;
    switch (nav.menu.id) {
      case 'main':
        switch (nav.menu.selected.id) {
          case 5:
            return <IExtract />;
          case 6:
            return <IModel />;
          case 8:
            return <IPlan />;
          default:
            return <IExtract />;
        }
      case 'iapply':
        return <IApply {...this.props} />;

      default:
        return null;
    }
  }
}
