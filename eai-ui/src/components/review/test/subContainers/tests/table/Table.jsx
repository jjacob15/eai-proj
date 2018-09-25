import React from 'react';
import Header from './TableHeader';
import Footer from './TableFooter';
import Body from './TableBody';

export default class Table extends React.Component {
  render() {
    return (
      <div className="dataTables_length">
        <Header />
        <Body {...this.props} />
        <Footer />
      </div>
    );
  }
}
