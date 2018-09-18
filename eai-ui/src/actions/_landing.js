// import { SET_LANDING_MENU, SET_SELECTED_LANDING_MENU, SET_MENU } from '../constants/types';
// import { LANDING } from '../constants/iapplyApps';
// import menuConstant from '../constants/menuContent';
// import { manageLandingMenuSelect } from './landingMenu';

// function onLandingMenuSelected(item) {
//   return manageLandingMenuSelect(item);
// }

// function onToggleOptionIcons() {
//   return function (dispatch) {
//     dispatch({ type: TOGGLE_OPT_ICONS });
//   };
// }

// function setLandingMenu(items) {
//   return function(dispatch) {
//     if (items === undefined) {
//       let defaultItems = menuConstant.main.content[1].content.map(x => ({ ...x, source: LANDING }));

//       dispatch({ type: SET_LANDING_MENU, content: { content: defaultItems, context: LANDING } });
//       dispatch({ type: SET_SELECTED_LANDING_MENU, content: defaultItems[0] });
//     } else {
//       dispatch({ type: SET_LANDING_MENU, content: items });
//     }
//   };
// }

// module.exports = { onLandingMenuSelected, setLandingMenu };
