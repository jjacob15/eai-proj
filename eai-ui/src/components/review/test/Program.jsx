import React, { Component } from 'react';
import Test from './subContainers/tests';
import Measures from './subContainers/measures';
import { getObjFromArr } from '../../../util';
import Tabs from '../../ui/tabs';
import DeleteProgramModal from './DeleteProgramModal';

const getTabsFromArr = items => {
  if (items.length === 0) return [{ id: -1, name: 'Program' }];

  return items.map(x => ({ id: x.id, name: x.title }));
};

class Program extends Component {
  constructor() {
    super();
    this.handleSelectedTab = this.handleSelectedTab.bind(this);
    // this.handleTabAdd = this.handleTabAdd.bind(this);
  }

  renderSubview(selectedProgram) {
    if (!selectedProgram) return <Test {...this.props} />;

    switch (selectedProgram.view.toLowerCase()) {
      case 'test':
        return <Test {...this.props} />;
      case 'measures':
        return <Measures />;
      default:
        return <Test />;
    }
  }

  handleSelectedTab(item) {
    this.props.setActiveProgram(item.id);
  }
  // handleTabAdd() {
  //   this.props.addNewTest();
  // }

  renderDeleteModal() {
    console.log(this.props);
    const { showDeleteProgram, program } = this.props;
    const { programs, activeProgram } = program;

    const selectedProg = getObjFromArr(programs, activeProgram);

    if (selectedProg === null) return null;

    return (
      <DeleteProgramModal
        isModalOpen={showDeleteProgram}
        title={selectedProg && selectedProg.title ? selectedProg.title : ''}
        handleCloseModal={this.props.handleCloseDeleteModal}
        handleDelete={this.props.handleTestProgramDelete}
      />
    );
  }

  render() {
    const { programs, activeProgram } = this.props.program;
    let selectedProgram = getObjFromArr(programs, activeProgram);

    return (
      <div>
        <Tabs items={getTabsFromArr(programs)} active={activeProgram} handleSelected={this.handleSelectedTab}>
          <div style={{ position: 'absolute', right: '0px', fontSize: '15px' }}>
            <i className="fa fa-file m-10" onClick={this.props.addNewTest} />
            {activeProgram !== -1 && <i className="fa fa-times m-10" onClick={this.props.displayDeleteModelWindow} />}
          </div>
        </Tabs>
        <div className="card m-t-20 p-20">{this.renderSubview(selectedProgram)}</div>

        {this.renderDeleteModal()}
      </div>
    );
  }
}

export default Program;
