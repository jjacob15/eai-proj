import React from 'react';
import {Link} from 'react-router-dom';


class IApply extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   this.props.onClick(7);
  // }

  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-block text-center">
          <div className="m-t-10 m-b-30">
            <i className="fa fa-globe text-c-green d-block f-50" />
          </div>
          <h4 className="m-t-20">iApply</h4>
          <p className="m-b-25">View business metrics</p>
          <Link className="btn btn-primary btn-sm btn-round" to="/iapply">Enter</Link>
        </div>
      </div>
    );
  }
}

{/* <button className="btn btn-primary btn-sm btn-round">
Enter
</button> */}

module.exports = IApply;
