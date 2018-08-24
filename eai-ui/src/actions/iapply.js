import { SET_APPLY_APP, SET_LANDING_MENU, SET_OPT_BTN_LAYOUT, HOME_OPT_BTN_LAYOUT } from '../constants/types';

import { LANDING, APPLY_APP_TC } from '../constants/iapplyApps';
import menuConstant from '../reducers/menuContent';
import { initializeTc } from './testControl/home';

function setApplyApp(app) {
  // set the app
  if (app && app === APPLY_APP_TC) {
    return initializeTc(app);
  }
  return function(dispatch) {
    const items = menuConstant[1].content.map(x => ({ ...x, source: LANDING }));
    dispatch({ type: SET_APPLY_APP, app: null });
    // reseting  landing menu
    dispatch({ type: SET_LANDING_MENU, content: { content: items, context: LANDING } });
    // setting option buttons
    dispatch({ type: SET_OPT_BTN_LAYOUT, content: HOME_OPT_BTN_LAYOUT });
  };
}

module.exports = { setApplyApp };
