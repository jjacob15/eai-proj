import React, { Component } from 'react';
import Test from './subContainers/tests';
import Measures from './subContainers/measures';

class Program extends Component {
    renderSubview(selectedProgram) {
        switch (selectedProgram.view.toLowerCase()) {
            case 'test': return <Test />
            case 'measures': return <Measures />
            default: return <Test />
        }
    }
    render() {
        const { programs, activeProgram } = this.props;
        const selectedProgram = programs.find(x => x.id === activeProgram);
        return (<div>
            {selectedProgram.title}
            {this.renderSubview(selectedProgram)}
        </div>)
    }
}

export default Program;