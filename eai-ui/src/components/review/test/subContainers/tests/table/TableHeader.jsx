import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row justify-content-between spacedRow">
        <div className="col-md-8 col-xl-8">
          <label>
            Show{' '}
            <select name="simpletable_length" className="form-control input-sm">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{' '}
            entries
          </label>
          <label style={{ marginLeft: '10px' }}>
            Search: <input type="search" className="form-control input-sm" placeholder="" aria-controls="simpletable" />
          </label>
        </div>
        <div className="col-md-4 col-xl-4 padded-buttons" style={{ textAlign: 'right' }}>
          <button className="btn btn-grd-primary btn-sm">Create</button>
          <button className="btn btn-grd-success btn-sm">Copy</button>
          <button className="btn btn-grd-info btn-sm">Combine</button>
        </div>
      </div>
    );
  }
}
