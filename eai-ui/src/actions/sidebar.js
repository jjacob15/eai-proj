import { SET_SELECTED_MENU, SET_SELECTED_LANDING_MENU, SET_MENU } from '../constants/types';

import { setApplyApp } from './iapply';
import menuContent from '../constants/menuContent';

function onSideBarMenuSelected(item) {
  return function(dispatch, getState) {
    // remove app when main links are invoked
    dispatch(setApplyApp(null));

    //update menu content state
    if (item) {
      // const state = getState();
      // menuContent[state.nav.menu.id].selected = item;
    }

    //swtich if iapply
    if (item.id === 7) {
      dispatch({ type: SET_MENU, content: menuContent.iapply });
    } else {
      dispatch({ type: SET_SELECTED_MENU, item });
      // dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
    }
  };
}

module.exports = { onSideBarMenuSelected };
