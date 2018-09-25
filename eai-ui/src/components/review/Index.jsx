import React from 'react';
import { Route } from 'react-router-dom';
import { reviewTestPath, reviewPath } from '../../constants/links';
import Test from './test';
import Home from './Home';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={reviewPath} render={p => <Home />} />
        <Route path={reviewTestPath} render={p => <Test {...this.props} />} />
      </div>
    );
  }
}
