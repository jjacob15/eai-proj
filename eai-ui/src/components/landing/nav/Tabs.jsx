import React from 'react';
import { connect } from 'react-redux';
import TabContainer from './TabContainer';
import { SET_SELECTED_MENU } from '../../../constants/types';

const mapProps = disptach => ({
  onMenuSelected: item => {
    disptach({ type: SET_SELECTED_MENU, item });
  },
});

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(item) {
    this.props.onMenuSelected(item);
  }

  render() {
    return (
      <div style={{ marginBottom: '15px' }}>
        <TabContainer {...this.props} onSelect={i => this.onSelect(i)} />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  mapProps
)(Tabs);
