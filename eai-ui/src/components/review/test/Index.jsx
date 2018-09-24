import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProgram from './NewProgram';
import DeleteProgramModal from './DeleteProgramModal';
import Program from './Program';
import { getObjFromArr } from '../../../util';
import Tabs from '../../ui/tabs';

const TC = () => <div />;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSelectedTab = this.handleSelectedTab.bind(this);
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
    const { review } = this.props;
    const { test } = review;
    switch (test.view) {
      case 'program':
        return <Program {...test.program} />;
      case 'newView':
        return <NewProgram {...review} />;
      default:
        return null;
    }
  }

  renderDeleteModal() {
    const { review } = this.props;
    const { test } = review;
    const { programs, activeProgram } = test.program;

    const selectedProg = getObjFromArr(programs, activeProgram);

    if (selectedProg === null) return null;
    // const selectedProg = activeProgram === -1
    //   ? ''
    //   : programs.find(x => x.id === activeProgram);

    return (
      <DeleteProgramModal
        isModalOpen={test.showDeleteProgram}
        title={selectedProg && selectedProg.title ? selectedProg.title : ''}
        handleCloseModal={this.props.handleCloseDeleteModal}
        handleDelete={this.props.handleTcDelProgram}
      />
    );
  }

  handleSelectedTab(item) {
    console.log(item);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Tabs
          items={[{ id: 1, name: 'jack' }, { id: 2, name: 'jack2' }]}
          active={2}
          handleSelected={this.handleSelectedTab}
        />
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
    // handleCloseDeleteModal: () => dispatch({ type: TC_HIDE_DELETE_MODAL }),
    // handleTcDelProgram: () => dispatch(deleteTcProgram()),
  };
}
export default connect(
  () => ({}),
  actions
)(Index);
