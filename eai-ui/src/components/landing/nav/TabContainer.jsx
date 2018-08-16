import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import Tabs from './Tabs';
import { SET_SELECTED_MENU, TOGGLE_OPT_ICONS } from '../../../constants/types';
import CollapseIcon from './CollapseIcon';
import OptionButtons from './OptionButtons';

const mapProps = dispatch => ({
  onMenuSelected: item => {
    dispatch({ type: SET_SELECTED_MENU, item });
  },
  onToggleOptionIcons: () => {
    dispatch({ type: TOGGLE_OPT_ICONS });
  },
});

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const { onMenuSelected } = this.props;
    onMenuSelected(item);
  }

  render() {
    const { nav, onToggleOptionIcons } = this.props;
    const { displayOptionIcons } = nav;
    return (
      <div>
        <div className="row" style={{ position: 'relative', marginBottom: '15px' }}>
          <div className="col-md-12 col-xl-6">
            <div>
              <Tabs handleClick={this.handleClick} {...this.props} />
            </div>
          </div>
          <CollapseIcon state={displayOptionIcons} toggleClick={onToggleOptionIcons} />
        </div>
        <div className="row">
          <div className="col-md-12 col-xl-12">
            <Transition in={displayOptionIcons} timeout={350}>
              {status => <OptionButtons status={status} />}
            </Transition>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  mapProps
)(TabContainer);
