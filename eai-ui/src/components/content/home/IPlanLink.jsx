import React from 'react';

class IPlan extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card-block text-center">
                    <div class="m-t-10 m-b-30">
                        {/* <img alt="Business Planning" src={require('../../../../assets/images/avatar-4.jpg')} className="img-radius" /> */}
                        <i class="fa fa-calendar text-c-green d-block f-50"></i>
                    </div>                    
                    <h4 className="m-t-20">iPlan</h4>
                    <p className="m-b-25">Simulate business scenarios</p>
                    <button className="btn btn-primary btn-sm btn-round">Enter</button>
                </div>
            </div>);
    }
}

module.exports = IPlan;
