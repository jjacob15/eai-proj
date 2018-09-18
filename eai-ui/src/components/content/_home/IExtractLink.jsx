import React from 'react';

class IExtract extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="card-block text-center">
          <div className="m-t-10 m-b-30">
            {/* <img alt="Data Processing" src={require('../../../../assets/images/avatar-4.jpg')} className="img-radius" /> */}
            <i className="fa fa-server text-c-green d-block f-50" />
          </div>
          <h4 className="m-t-20">iExtract</h4>
          <p className="m-b-25">Extract and process data</p>
          <button className="btn btn-primary btn-sm btn-round">Enter</button>
        </div>
      </div>
    );
  }
}

module.exports = IExtract;
