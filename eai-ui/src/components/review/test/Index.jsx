import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProgram from './NewProgram';
import DeleteProgramModal from './DeleteProgramModal';
import Program from './Program';
import { getObjFromArr } from '../../../util';
import Tabs from '../../ui/tabs';
import {
  TC_SET_VIEW,
  TC_SET_ACTIVE_PROGRAM,
  TC_HIDE_DELETE_MODAL,
  TC_SHOW_DELETE_MODAL,
} from '../../../constants/types';
import { deleteTcProgram } from '../../../actions';

const WelcomeMessage = props => (
  <div className="title-content-font" style={{ fontSize: '50px' }}>
    Add your first test to review by clicking <a onClick={() => props.handleClicked()}>here</a>
  </div>
);

class Index extends Component {
  constructor(props) {
    super(props);

    this.setActiveProgram = this.setActiveProgram.bind(this);
  }

  setActiveProgram(id) {
    this.props.setActiveTestProgram(id);
  }

  render() {
    console.log(this.props);
    const { review } = this.props;
    const { test } = review;

    switch (test.view) {
      case 'new':
        return <NewProgram {...review} />;
      default:
        return (
          <Program
            {...test}
            addNewTest={this.props.changingViewToNew}
            setActiveProgram={this.setActiveProgram}
            handleCloseDeleteModal={this.props.handleCloseDeleteModal}
            handleTestProgramDelete={this.props.handleTestProgramDelete}
            displayDeleteModelWindow={this.props.displayDeleteModelWindow}
          />
        );
    }
  }
}

function actions(dispatch) {
  return {
    changingViewToNew: () => dispatch({ type: TC_SET_VIEW, content: 'new' }),
    setActiveTestProgram: id => dispatch({ type: TC_SET_ACTIVE_PROGRAM, content: id }),
    handleCloseDeleteModal: () => dispatch({ type: TC_HIDE_DELETE_MODAL }),
    handleTestProgramDelete: () => dispatch(deleteTcProgram()),
    displayDeleteModelWindow: () => dispatch({ type: TC_SHOW_DELETE_MODAL }),
  };
}
export default connect(
  () => ({}),
  actions
)(Index);
