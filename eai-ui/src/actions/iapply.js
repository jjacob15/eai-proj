import {
    SET_APPLY_APP,
    SET_LANDING_MENU,
    SET_SELECTED_LANDING_MENU,
    SET_OPT_BTN_LAYOUT,
    TC_OPT_BTN_LAYOUT,
    HOME_OPT_BTN_LAYOUT,
} from '../constants/types';
import menuConstant from '../reducers/menuContent';

const initialMenu = [{
    id: '_program1',
    label: 'Program'
}]

function setApplyApp(app) {
    return function (dispatch) {
        //set the app
        if (app) {

            dispatch({ type: SET_APPLY_APP, app: app })

            //setting landing menus
            dispatch({ type: SET_LANDING_MENU, content: initialMenu })
            dispatch({ type: SET_SELECTED_LANDING_MENU, content: initialMenu[0] })

            //setting option buttons
            dispatch({ type: SET_OPT_BTN_LAYOUT, content: TC_OPT_BTN_LAYOUT });
        } else {
            const items = menuConstant[1].content.map(x => ({ ...x, from: 'landing' }));
            dispatch({ type: SET_APPLY_APP, app: null })
            //reseting  landing menu
            dispatch({ type: SET_LANDING_MENU, content: items })
            //setting option buttons
            dispatch({ type: SET_OPT_BTN_LAYOUT, content: HOME_OPT_BTN_LAYOUT });
        }

    }
}

module.exports = { setApplyApp }