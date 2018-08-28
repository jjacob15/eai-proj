import React from 'react';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container-fluid test-control">
        <div className="row spacedRow">
          <div className="col-md-12 col-lg-12">
            <h5 style={{ marginBottom: '0px' }}>Measures</h5>
          </div>
        </div>
      </div>
    );
  }
}
