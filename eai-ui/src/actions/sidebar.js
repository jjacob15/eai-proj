import { SET_SELECTED_MENU, SET_SELECTED_LANDING_MENU, SET_MENU } from '../constants/types';

import { setApplyApp } from './iapply';
import menu from '../constants/menu';

function onSideBarMenuSelected(item) {
  return function(dispatch, getState) {
    // remove app when main links are invoked
    console.log('here')
    dispatch(setApplyApp(null));

    //update menu content state
    if (item) {
      // const state = getState();
      // menu[state.nav.menu.id].selected = item;
    }

    console.log(item)
    //swtich if iapply
    if (item.id === 7) {
      dispatch({ type: SET_MENU, content: menu.iapply });
    } else {
      dispatch({ type: SET_SELECTED_MENU, item });
      // dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
    }
  };
}

module.exports = { onSideBarMenuSelected };
