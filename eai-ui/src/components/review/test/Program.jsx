import React, { Component } from 'react';
import Test from './subContainers/tests';
import Measures from './subContainers/measures';
import { getObjFromArr } from '../../../util';

class Program extends Component {
  renderSubview(selectedProgram) {
    switch (selectedProgram.view.toLowerCase()) {
      case 'test':
        return <Test {...this.props} />;
      case 'measures':
        return <Measures />;
      default:
        return <Test />;
    }
  }
  render() {
    const { programs, activeProgram } = this.props;
    const selectedProgram = getObjFromArr(programs, activeProgram);

    // const selectedProgram = programs.find(x => x.id === activeProgram);
    return <div>{this.renderSubview(selectedProgram)}</div>;
  }
}

export default Program;
