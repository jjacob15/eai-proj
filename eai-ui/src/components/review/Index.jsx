import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { reviewPath } from '../../constants/links';
import Test from './test';

class Index extends Component {
  render() {
    return (
      <div>
        <Route path={reviewPath} render={p => <Test {...this.props} />} />
      </div>
    );
  }
}

module.exports = Index;
