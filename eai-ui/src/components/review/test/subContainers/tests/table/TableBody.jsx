import React from 'react';

export default class Body extends React.Component {
  renderBody() {
    const { activeProgram } = this.props.program;

    if (activeProgram === -1) return null;

    return (
      <tbody>
        <tr role="row">
          <td className="sorting_1">Airi Satou</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>33</td>
          <td>2008/11/28</td>
        </tr>
        <tr role="row">
          <td className="sorting_1">Ashton Cox</td>
          <td>Junior Technical Author</td>
          <td>San Francisco</td>
          <td>66</td>
          <td>2009/01/12</td>
        </tr>
        <tr role="row">
          <td className="sorting_1">Bradley Greer</td>
          <td>Software Engineer</td>
          <td>London</td>
          <td>41</td>
          <td>2012/10/13</td>
        </tr>
        <tr role="row">
          <td className="sorting_1">Brielle Williamson</td>
          <td>Integration Specialist</td>
          <td>New York</td>
          <td>61</td>
          <td>2012/12/02</td>
        </tr>
        <tr role="row">
          <td className="sorting_1">Cedric Kelly</td>
          <td>Senior Javascript Developer</td>
          <td>Edinburgh</td>
          <td>22</td>
          <td>2012/03/29</td>
        </tr>
        <tr role="row">
          <td className="sorting_1">Charde Marshall</td>
          <td>Regional Director</td>
          <td>San Francisco</td>
          <td>36</td>
          <td>2008/10/16</td>
        </tr>
      </tbody>
    );
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12" style={{ overflow: 'auto' }}>
          <table id="simpletable" className="table table-bordered table-hover nowrap dataTable">
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  tabIndex="0"
                  aria-controls="simpletable"
                  rowSpan="1"
                  colSpan="1"
                  aria-sort="ascending">
                  Test
                </th>
                <th className="sorting" tabIndex="0" aria-controls="simpletable" rowSpan="1" colSpan="1">
                  Primary Metric
                </th>
                <th className="sorting" tabIndex="0" aria-controls="simpletable" rowSpan="1" colSpan="1">
                  Period
                </th>
                <th className="sorting" tabIndex="0" aria-controls="simpletable" rowSpan="1" colSpan="1">
                  Test Stores
                </th>
                <th className="sorting" tabIndex="0" aria-controls="simpletable" rowSpan="1" colSpan="1">
                  Average Controls
                </th>
              </tr>
            </thead>
            {this.renderBody()}
            <tfoot>
              <tr>
                <th rowSpan="1" colSpan="1">
                  Test
                </th>
                <th rowSpan="1" colSpan="1">
                  Primary Metric
                </th>
                <th rowSpan="1" colSpan="1">
                  Period
                </th>
                <th rowSpan="1" colSpan="1">
                  Test Stores
                </th>
                <th rowSpan="1" colSpan="1">
                  Average Controls
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
