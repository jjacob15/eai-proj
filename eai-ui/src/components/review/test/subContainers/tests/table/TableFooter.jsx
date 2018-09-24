import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-5">
          <div className="dataTables_info">Showing 1 to 10 of 57 entries</div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7">
          <div className="dataTables_paginate paging_simple_numbers">
            <ul className="pagination">
              <li className="paginate_button page-item previous disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="paginate_button page-item active">
                <a className="page-link">1</a>
              </li>
              <li className="paginate_button page-item ">
                <a className="page-link">2</a>
              </li>
              <li className="paginate_button page-item ">
                <a className="page-link">3</a>
              </li>
              <li className="paginate_button page-item ">
                <a className="page-link">4</a>
              </li>
              <li className="paginate_button page-item ">
                <a className="page-link">5</a>
              </li>
              <li className="paginate_button page-item ">
                <a className="page-link">6</a>
              </li>
              <li className="paginate_button page-item next">
                <a className="page-link">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
