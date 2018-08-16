import React from 'react';

export const Card = () => (
  <div className="card widget-statstic-card borderless-card">
    <div className="card-header">
      <div className="card-header-left">
        <h5>Demand Driver</h5>
        <p className="p-t-10 m-b-0 text-muted">Description of Demand Driver</p>
      </div>
    </div>
    <div className="card-block">
      <i className="fa fa-calendar st-icon bg-primary" />
      <div className="row">
        <div className="col-md-12 col-xl-12" style={{ whiteSpace: 'nowrap' }}>
          <button type="button" className="btn btn-sm btn-grd-success">
            Enter
          </button>
          <button type="button" className="btn btn-sm btn-grd-info">
            Learn More
          </button>
          <button type="button" className="btn btn-sm btn-grd-warning">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
);
