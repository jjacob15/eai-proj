import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { setTestControlView } from '../../actions';
import { TC_SHOW_DELETE_MODAL, TC_SET_PROGRAM_VIEW } from '../../constants/types';

class TCOB extends React.Component {
  constructor() {
    super();

    this.onNewProgram = this.onNewProgram.bind(this);
    this.onDeleteProgram = this.onDeleteProgram.bind(this);
    this.findActiveView = this.findActiveView.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onNewProgram() {
    this.props.onNewProgram('newView');
  }

  onDeleteProgram() {
    this.props.onDeleteProgram();
  }

  renderTcButton() {
    const { testControl } = this.props.iapply;
    const { programs } = testControl.program;
    if (testControl.view === 'newView') return;

    return (
      <span>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <button className="btn btn-grd-primary btn-sm" onClick={this.onNewProgram} onKeyPress={this.onNewProgram}>
            New Program
          </button>

          {programs.length > 0 && (
            <button
              className="btn btn-grd-danger btn-sm"
              onClick={this.onDeleteProgram}
              onKeyPress={this.onDeleteProgram}>
              Delete Program
            </button>
          )}
        </div>
      </span>
    );
  }

  findActiveView(current) {
    const { iapply } = this.props;
    const { testControl } = iapply;
    const { programs, activeProgram } = testControl.program;
    if (programs.length === 0) return false;

    return programs.find(x => x.id === activeProgram).view.toLowerCase() === current.toLowerCase();
  }

  handleClick(view) {
    this.props.onTcOption(view);
  }

  render() {
    const { iapply } = this.props;
    const { testControl } = iapply;
    const selected = false;
    return (
      <div style={{ position: 'relative' }}>
        <Button iconClass="ti-help" text="Info" disabled={testControl.initialInactive} selected={this.findActiveView('info')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-search" text="Test" disabled={testControl.initialInactive} selected={this.findActiveView('test')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-filter" text="Measures" disabled={testControl.initialInactive} selected={this.findActiveView('Measures')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-filter" text="Clusters" disabled={testControl.initialInactive} selected={this.findActiveView('Clusters')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-zoom-in" text="Attributes" disabled={testControl.initialInactive} selected={this.findActiveView('Attributes')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-layout-grid3" text="Dates" disabled={testControl.initialInactive} selected={this.findActiveView('Dates')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-printer" text="Size" disabled={testControl.initialInactive} selected={this.findActiveView('Size')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        <Button iconClass="ti-export" text="Help" disabled={testControl.initialInactive} selected={this.findActiveView('Help')} onClick={this.handleClick} onKeyPress={this.handleClick} />
        {this.renderTcButton()}
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    onNewProgram: view => dispatch(setTestControlView(view)),
    // onDeleteProgram: () => dispatch(deleteTcProgram())
    onDeleteProgram: () => dispatch({ type: TC_SHOW_DELETE_MODAL }),
    onTcOption: (view) => dispatch({ type: TC_SET_PROGRAM_VIEW, content: view })
  };
}

export default connect(
  () => ({}),
  actions
)(TCOB);
