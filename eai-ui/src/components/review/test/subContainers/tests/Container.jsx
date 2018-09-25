import React from 'react';
import Tabs from './Tabs';
import { connect } from 'react-redux';
import { TC_SHOW_DELETE_MODAL } from '../../../../../constants/types';

class Container extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.displayDeleteModelWindow();
  }
  render() {
    return (
      <div className="test-control">
        <div className="row spacedRow">
          <div className="col-md-12 col-lg-12">
            <h5 style={{ marginBottom: '0px' }}>Tests (0)</h5>
            <div style={{ position: 'absolute', right: '0', top: '5px', fontSize: '15px' }}>
              <span style={{ margin: '10px' }}>
                <i className="fa fa-plus" />
              </span>
              <span style={{ margin: '10px' }}>
                <i className="fa fa-copy" />
              </span>
              <span style={{ margin: '10px' }}>
                <i className="fa fa-times" title="Delete program" onClick={this.handleDelete} />
              </span>
              <span style={{ margin: '10px' }}>
                <i className="fa fa-ellipsis-h" />
              </span>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    displayDeleteModelWindow: () => dispatch({ type: TC_SHOW_DELETE_MODAL }),
  };
}

export default connect(
  () => ({}),
  actions
)(Container);
