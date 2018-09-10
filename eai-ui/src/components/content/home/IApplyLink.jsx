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
                    <img alt="avatar" src={require('../../../../assets/images/avatar-4.jpg')} className="img-radius" />
                    <h4 className="m-t-20">iApply</h4>
                    <p className="m-b-20">Your main list is growing</p>
                    <button className="btn btn-info btn-sm btn-round" onClick={this.handleClick}>Enter</button>
                </div>
            </div>);
    }
}

module.exports = IApply;
