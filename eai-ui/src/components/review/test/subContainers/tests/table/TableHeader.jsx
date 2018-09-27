import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row justify-content-between spacedRow">
        <div className="col-md-8 col-xl-8">
          <label>
            Show{' '}
            <select name="simpletable_length" className="form-control input-sm">
              <option value="10">5</option>
              <option value="25">10</option>
              <option value="50">15</option>
              <option value="100">20</option>
            </select>{' '}
            entries
          </label>
          <label style={{ marginLeft: '20px' }}>
            Search: <input type="search" className="form-control input-sm" placeholder="" aria-controls="simpletable" />
          </label>
        </div>
      </div>
    );
  }
}
