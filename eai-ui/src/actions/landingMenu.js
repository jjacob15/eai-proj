import { SET_SELECTED_LANDING_MENU, SET_SELECTED_MENU, TC_SET_ACTIVE_PROGRAM } from '../constants/types';
import { TC, LANDING } from '../constants/iapplyApps';

function manageLandingMenuSelect(item) {
  switch (item.source) {
    case LANDING:
      return function(dispatch, getState) {
        const state = getState();
        const currentItem = state.nav.landingMenu.selected.id;

        if (currentItem === item.id) return function() {};

        dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
        dispatch({ type: SET_SELECTED_MENU, item });
      };
    case TC:
      // for TC we don't need to set the main menus,
      // for TC clicks we switch active programs
      if (item.id === -1) return function() {};

      return function(dispatch, getState) {
        const state = getState();
        const currentItem = state.iapply.testControl.program.activeProgram;

        if (currentItem === item.id) return function() {};

        dispatch({ type: TC_SET_ACTIVE_PROGRAM, content: item.id });
        dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
      };
    default:
      break;
  }
}

module.exports = { manageLandingMenuSelect };
