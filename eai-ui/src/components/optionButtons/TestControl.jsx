import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { setTestControlView, deleteTcProgram } from '../../actions';
import { TC_SHOW_DELETE_MODAL } from '../../constants/types';

class TCOB extends React.Component {
  constructor() {
    super();

    this.onNewProgram = this.onNewProgram.bind(this);
    this.onDeleteProgram = this.onDeleteProgram.bind(this);
  }

  onNewProgram() {
    this.props.onNewProgram('newView');
  }

  onDeleteProgram() {
    this.props.onDeleteProgram();
  }

  renderTcButton() {
    const { testControl } = this.props.iapply;

    if (testControl.view === 'newView') return;

    return (
      <span>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <button className="btn btn-grd-primary btn-sm" onClick={this.onNewProgram} onKeyPress={this.onNewProgram}>
            New Program
          </button>

          {testControl.programs.length > 0 && (
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

  render() {
    const { iapply } = this.props;
    const { testControl } = iapply;

    return (
      <div style={{ position: 'relative' }}>
        <Button iconClass="ti-help" text="Info" disabled={testControl.initialInactive} />
        <Button iconClass="ti-search" text="Test" disabled={testControl.initialInactive} />
        <Button iconClass="ti-filter" text="Measures" disabled={testControl.initialInactive} />
        <Button iconClass="ti-filter" text="Clusters" disabled={testControl.initialInactive} />
        <Button iconClass="ti-zoom-in" text="Attributes" disabled={testControl.initialInactive} />
        <Button iconClass="ti-layout-grid3" text="Dates" disabled={testControl.initialInactive} />
        <Button iconClass="ti-printer" text="Size" disabled={testControl.initialInactive} />
        <Button iconClass="ti-export" text="Help" disabled={testControl.initialInactive} />
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
  };
}

export default connect(
  () => ({}),
  actions
)(TCOB);
