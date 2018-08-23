import { SET_SELECTED_LANDING_MENU, SET_SELECTED_MENU } from '../constants/types';

function manageLandingMenuSelect(item) {
  switch (item.from) {
    case 'landing':
      return function(dispatch) {
        dispatch({ type: SET_SELECTED_LANDING_MENU, content: item });
        dispatch({ type: SET_SELECTED_MENU, item });
      };
    default:
      break;
  }
}

module.exports = { manageLandingMenuSelect };
