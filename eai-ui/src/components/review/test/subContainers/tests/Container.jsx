import React from 'react';
import Tabs from './Tabs';

class Container extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { activeProgram } = this.props.program;
    return (
      <div className="test-control">
        <div className="row spacedRow">
          <div className="col-md-12 col-lg-12">
            <h5 style={{ marginBottom: '0px' }}>Tests (0)</h5>
            {activeProgram !== -1 && (
              <div style={{ position: 'absolute', right: '0', top: '5px', fontSize: '15px' }}>
                <span style={{ margin: '10px' }}>
                  <i className="fa fa-plus" />
                </span>
                <span style={{ margin: '10px' }}>
                  <i className="fa fa-copy" />
                </span>
                <span style={{ margin: '10px' }}>
                  <i className="fa fa-times" title="Delete program" />
                </span>
                <span style={{ margin: '10px' }}>
                  <i className="fa fa-ellipsis-h" />
                </span>
              </div>
            )}
          </div>
        </div>
        <Tabs {...this.props} />
      </div>
    );
  }
}

export default Container;
