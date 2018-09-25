import React from 'react';
import Accordian from '../ui/accordian';
import data from './reviewData';
import { Link } from 'react-router-dom';
import { reviewTestPath } from '../../constants/links';

export default class Home extends React.Component {
  render() {
    const img = require('../../../assets/images/segimg.jpg');
    return (
      <div>
        <div className="row">
          <i className="fa fa-project-diagram text-c-green d-block f-40 m-l-20" />
          <h4 className="m-l-20" style={{ lineHeight: '40px' }}>
            Review
          </h4>
        </div>
        <div className="m-t-25">
          {data.map((row, rIdx) => (
            <Accordian title={row.title} key={rIdx}>
              <div className="card">
                <div className="card-block">
                  <ul className="feed-blog">
                    {row.content.map((content, cIdx) => (
                      <li className="active-feed" key={cIdx}>
                        <div className="feed-user-img">
                          <img alt={content.title} src={img} className="img-radius" />
                        </div>
                        <h6 className="m-b-0">{content.title}</h6>
                        <p className="text-muted m-b-15 m-t-5 small">{content.desc}</p>
                        <div className="row">
                          <Link className="col-auto" to={reviewTestPath}>
                            <i className="fa fa-sign-in-alt text-c-blue d-block f-20" />
                          </Link>
                          <div className="col-auto">
                            <i className="fa fa-info-circle text-c-green d-block f-20" />
                          </div>
                          <div className="col-auto">
                            <i className="fa fa-upload text-c-yellow d-block f-20" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Accordian>
          ))}
        </div>
      </div>
    );
  }
}
