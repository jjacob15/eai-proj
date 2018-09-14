import React, { Component } from 'react';

module.exports = class AboutEai extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="EAImage">
            <img src="../../../../../assets/images/EAi.png" alt="About EAI" style={{ height: '100%', width: '100%' }} />
          </div>
          <hr />
          <h6 className="f-w-600 m-b-10">Enterprise Analytics Intelligence</h6>
          <span className="text-muted m-t-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </span>
        </div>
      </div>
    );
  }
};
