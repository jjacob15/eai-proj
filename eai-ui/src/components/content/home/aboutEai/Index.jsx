import React, { Component } from 'react';

module.exports = class AboutEai extends Component {
    render() {
        return (<div className="card">
            <div className="card-body">
                <div className="usre-image">
                    <img src="../../../../../assets/images/gold-coast-nature.jpg" alt="User-Profile-Image" style={{ height: '100%', width: '100%' }} />
                </div>
                <hr />
                <h6 className="f-w-600 m-t-25 m-b-10">Enterprise Analytics Intelligence</h6>
                <p className="text-muted m-t-15">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
        </div>)
    }
}