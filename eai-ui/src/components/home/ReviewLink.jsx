import React from 'react';
import { Link } from 'react-router-dom';
import { reviewPath } from '../../constants/links';

class ReviewLink extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(reviewPath);
    return (
      <div className="card">
        <div className="card-block text-center">
          <div className="m-t-10 m-b-30">
            <i className="fa fa-project-diagram text-c-green d-block f-50" />
          </div>
          <h4 className="m-t-20">Review</h4>
          <p className="m-b-25">View business metrics</p>
          <Link className="btn btn-primary btn-sm btn-round" to={reviewPath}>
            Enter
          </Link>
        </div>
      </div>
    );
  }
}

module.exports = ReviewLink;
