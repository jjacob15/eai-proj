import React from 'react';

class IApply extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onClick(7);
    }

    render() {
        return (
            <div className="card">
                <div className="card-block text-center">                    
                    <div class="m-t-10 m-b-30">
                        {/* <img alt="Business Applications" src={require('../../../../assets/images/avatar-4.jpg')} className="img-radius" /> */}
                        <i class="fa fa-globe text-c-green d-block f-50"></i>
                    </div>
                    <h4 className="m-t-20">iApply</h4>
                    <p className="m-b-25">View business metrics</p>
                    <button className="btn btn-primary btn-sm btn-round" onClick={this.handleClick}>Enter</button>
                </div>
            </div>);
    }
}

module.exports = IApply;
