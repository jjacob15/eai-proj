import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProgram from './NewProgram';
import DeleteProgram from './DeleteProgram';
import { TC_HIDE_DELETE_MODAL } from '../../../../constants/types';
import { deleteTcProgram } from '../../../../actions';

const TC = () => <div>TC</div>;
const Program = () => <div>Program</div>;

class Index extends Component {
  constructor(props) {
    super(props);
  }

  renderInnerContent() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    switch (testControl.view) {
      case 'program':
        return <Program />;
      case 'newView':
        return <NewProgram {...iapply} />;
      default:
        return <TC />;
    }
  }

  renderDeleteModal() {
    const { iapply } = this.props;
    const { testControl } = iapply;

    const selectedProg =
      testControl.activeProgram && testControl.activeProgram.id === -1
        ? ''
        : testControl.programs.find(x => x.id === testControl.activeProgram.id);

    return (
      <DeleteProgram
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
