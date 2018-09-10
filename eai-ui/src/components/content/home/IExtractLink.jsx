import React from 'react';

class IExtract extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card-block text-center">
                    <img alt="avatar" src={require('../../../../assets/images/avatar-4.jpg')} className="img-radius" />
                    <h4 className="m-t-20">iExtract</h4>
                    <p className="m-b-20">Your main list is growing</p>
                    <button className="btn btn-primary btn-sm btn-round">Enter</button>
                </div>
            </div>);
    }
}

module.exports = IExtract;
