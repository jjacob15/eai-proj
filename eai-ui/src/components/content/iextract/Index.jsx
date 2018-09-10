import React from 'react';


class IExtract extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="card-block text-center">
          <i className="fa fa-envelope-open text-c-blue d-block f-40"></i>
          <h4 className="m-t-20"><span className="text-c-blue">8.62k</span> Subscribers</h4>
          <p className="m-b-20">Your main list is growing</p>
          <button className="btn btn-primary btn-sm btn-round">Manage List</button>
        </div>
      </div>);
  }
}

module.exports = IExtract;
