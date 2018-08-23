import React from 'react';

export default class NewProgram extends React.Component {
  constructor() {
    super();
    this.onCancel = this.onCancel.bind(this);
  }
  onCancel() {
    this.props.onCancel();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row margin-bottom" style={{ marginTop: '1em' }}>
          <div className="col-md-4 col-xl-4">
            <h5>New Program</h5>
            <div className="input-group">
              <input type="text" className="form-control form-control-sm" placeholder="Name" />
            </div>
            <div className="input-group">
              <textarea rows="4" cols="50" placeholder="Description" className="form-control form-control-sm" />
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary btn-sm" style={{ marginRight: '1em' }}>
                Save
              </button>
              <button type="button" className="btn btn-default btn-sm" onClick={this.onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
