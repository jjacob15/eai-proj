import { SET_SELECTED_MENU, SET_SELECTED_LANDING_MENU } from '../constants/types';

import { setApplyApp } from './iapply';

function onSideBarMenuSelected(item) {
  return function(dispatch) {
    // remove app when main links are invoked
    dispatch(setApplyApp(null));

    dispatch({ type: SET_SELECTED_MENU, item });
    dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
  };
}

module.exports = { onSideBarMenuSelected };
