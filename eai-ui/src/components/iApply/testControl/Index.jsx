import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProgram from './NewProgram';
import DeleteProgramModal from './DeleteProgramModal';
import { TC_HIDE_DELETE_MODAL } from '../../../../constants/types';
import { deleteTcProgram } from '../../../../actions';
import Program from './Program';
import { getObjFromArr } from '../../../../util';

const TC = () => <div />;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.card = React.createRef();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const rect = this.card.current.getBoundingClientRect();
    this.setState({ height: window.innerHeight - rect.top - 10 });
  }

  renderInnerContent() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    switch (testControl.view) {
      case 'program':
        return <Program {...testControl.program} />;
      case 'newView':
        return <NewProgram {...iapply} />;
      default:
        return null;
    }
  }

  renderDeleteModal() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    const { programs, activeProgram } = testControl.program;

    const selectedProg = getObjFromArr(programs, activeProgram);

    if (selectedProg === null) return null;
    // const selectedProg = activeProgram === -1
    //   ? ''
    //   : programs.find(x => x.id === activeProgram);

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
        <div
          className="card nohover"
          ref={this.card}
          style={{ height: this.state.height, transitionProperty: 'none', marginBottom: '0px', paddingTop: '15px' }}>
          {this.renderInnerContent()}
        </div>
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
