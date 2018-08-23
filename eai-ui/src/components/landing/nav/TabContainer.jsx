import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import Tabs from './Tabs';
import {onLandingMenuSelected, onToggleOptionIcons} from '../../../actions';
import CollapseIcon from './CollapseIcon';
import OptionButtonContainer from './OptionButtonContainer';

function actions(dispatch){
  return {
    onToggleOptionIcons:()=>dispatch(onToggleOptionIcons()),
    onMenuSelected:(item)=>dispatch(onLandingMenuSelected(item))
  }
}

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
    const { nav, onToggleOptionIcons,children } = this.props;
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
              {status => <OptionButtonContainer status={status} >
                {children}
              </OptionButtonContainer>}
            </Transition>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  actions
)(TabContainer);
