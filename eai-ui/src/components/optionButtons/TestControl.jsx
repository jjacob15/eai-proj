import Button from './Button';
import React from 'react';
import { connect } from 'react-redux';
import { setTestControlView } from '../../actions';

class TCOB extends React.Component {
  renderTcButton() {
    return (
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button
          className="btn btn-grd-primary btn-sm"
          onClick={() => this.props.onNewProgram('newView')}
          onKeyPress={() => this.props.onNewProgram('newView')}>
          New Program
        </button>
      </div>
    );
  }
  render() {
    const { iapply } = this.props;
    const { testControl } = iapply;

    return (
      <div style={{ position: 'relative' }}>
        <Button iconClass="ti-help" text="Info" />
        <Button iconClass="ti-search" text="Test" />
        <Button iconClass="ti-filter" text="Measures" />
        <Button iconClass="ti-filter" text="Clusters" />
        <Button iconClass="ti-zoom-in" text="Attributes" />
        <Button iconClass="ti-layout-grid3" text="Dates" />
        <Button iconClass="ti-printer" text="Size" />
        <Button iconClass="ti-export" text="Help" />
        {this.renderTcButton()}
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    onNewProgram: view => dispatch(setTestControlView(view)),
  };
}

export default connect(
  () => ({}),
  actions
)(TCOB);
