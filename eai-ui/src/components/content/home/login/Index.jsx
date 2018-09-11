import React, { Component } from 'react';

module.exports = class AboutEai extends Component {
    render() {
        return (<div className="card">
        <div className="card-body">
            <div className="m-t-10 m-b-20">
                <h4 className="text-left txt-primary">Sign In</h4>
            </div>            
            <hr />
            <form >
                <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your Email Address" />
                        <span className="md-line"></span>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-control" placeholder="Password" />
                        <span className="md-line"></span>
                    </div>
                    <div className="row m-t-25 text-left">
                        <div className="col-12">
                            <div className="checkbox-fade fade-in-primary d-">
                                <label>
                                    <input type="checkbox" value="" />
                                    <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                    <span className="text-inverse">Remember me</span>
                                </label>
                            </div>
                            <div className="forgot-phone text-right f-right">
                                <a href="auth-reset-password.html" className="text-right f-w-600"> Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign in</button>
                        </div>
                    </div>
            </form>
            <hr/>
            <p>
            <div className="row">
                <div className="col-md-10">
                    <p className="text-inverse text-left m-b-0">Thank you and enjoy our website.</p>                    
                </div>
                <div className="col-md-2">
                    <img src="../../../../../assets/images/logo-small.png" alt="About EAI" style={{ width: '100%' }} />
                </div>                        
            </div>
            </p>
        </div>
    </div >)
    }
}