import React from 'react';

class IModel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="card-block text-center">
          <div className="m-t-10 m-b-30">
            {/* <img alt="Statistical Modeling" src={require('../../../../assets/images/avatar-4.jpg')} className="img-radius" /> */}
            <i className="fa fa-line-chart text-c-green d-block f-50" />
          </div>
          <h4 className="m-t-20">iModel</h4>
          <p className="m-b-25">Create statistical models</p>
          <button className="btn btn-primary btn-sm btn-round">Enter</button>
        </div>
      </div>
    );
  }
}

module.exports = IModel;
