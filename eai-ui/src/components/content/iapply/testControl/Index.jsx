import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProgram from './NewProgram';
import DeleteProgramModal from './DeleteProgramModal';
import { TC_HIDE_DELETE_MODAL } from '../../../../constants/types';
import { deleteTcProgram } from '../../../../actions';
import Program from './Program';

const TC = () => <div>TC</div>;


class Index extends Component {
  constructor(props) {
    super(props);
  }

  renderInnerContent() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    switch (testControl.view) {
      case 'program':
        return <Program {...testControl.program}/>;
      case 'newView':
        return <NewProgram {...iapply} />;
      default:
        return <TC />;
    }
  }

  renderDeleteModal() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    const { programs, activeProgram } = testControl.program;

    const selectedProg = activeProgram === -1
        ? ''
        : programs.find(x => x.id === activeProgram);

    return (
      <DeleteProgramModal
        isModalOpen={testControl.showDeleteProgram}
        title={selectedProg && selectedProg.title ? selectedProg.title : ''}
        handleCloseModal={this.props.handleCloseDeleteModal}
        handleDelete={this.props.handleTcDelProgram}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderInnerContent()}
        {this.renderDeleteModal()}
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    handleCloseDeleteModal: () => dispatch({ type: TC_HIDE_DELETE_MODAL }),
    handleTcDelProgram: () => dispatch(deleteTcProgram()),
  };
}
export default connect(
  () => ({}),
  actions
)(Index);
