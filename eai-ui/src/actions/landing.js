import {
    TOGGLE_OPT_ICONS,
    SET_LANDING_MENU,
    SET_SELECTED_LANDING_MENU,
    SET_OPT_BTN_LAYOUT,
    HOME_OPT_BTN_LAYOUT
} from '../constants/types';
import menuConstant from '../reducers/menuContent';
import { manageLandingMenuSelect } from './landingMenu';

function onLandingMenuSelected(item) {
    return manageLandingMenuSelect(item)
}

function onToggleOptionIcons() {
    return function (dispatch) {
        dispatch({ type: TOGGLE_OPT_ICONS });
    }
}

function setLandingMenu(items) {
    return function (dispatch) {
        if (items === undefined) {
            items = menuConstant[1].content.map(x => ({ ...x, from: 'landing' }));

            dispatch({ type: SET_LANDING_MENU, content: items })
            dispatch({ type: SET_SELECTED_LANDING_MENU, content: items[0] })
            dispatch({ type: SET_OPT_BTN_LAYOUT, content: HOME_OPT_BTN_LAYOUT });
        } else {
            dispatch({ type: SET_LANDING_MENU, content: items })
        }
    }
}

module.exports = { onLandingMenuSelected, onToggleOptionIcons, setLandingMenu }