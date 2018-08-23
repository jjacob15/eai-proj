import React, { Component } from 'react';
import NewProgram from './NewProgram';

const TC = () => <div>TC</div>;

class Index extends Component {
  render() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    switch (testControl.view) {
      case 'newView':
        return <NewProgram />;
      default:
        return <TC />;
    }
  }
}

export default Index;
