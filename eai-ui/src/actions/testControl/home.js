import {
  TC_SET_VIEW,
  TC_ADD_PROGRAM,
  TC_REMOVE_PROGRAM,
  SET_LANDING_MENU,
  ADD_LANDING_MENU,
  REMOVE_LANDING_MENU,
  SET_OPT_BTN_LAYOUT,
  TC_APP_INITIALIZE,
  SET_APPLY_APP,
  TC_OPT_BTN_LAYOUT,
  TC_HIDE_DELETE_MODAL,
} from '../../constants/types';

import { TC } from '../../constants/iapplyApps';

const initialTestControlMenu = {
  id: -1,
  label: 'Program',
  source: TC,
};

const getId = () => Math.floor(Math.random() * 1000);

function setTestControlView(view) {
  return function(dispatch) {
    dispatch({ type: TC_SET_VIEW, content: view });
  };
}

function initializeTc(app) {
  return function(dispatch, getState) {
    dispatch({ type: SET_APPLY_APP, app });

    const state = getState();
    const { testControl } = state.iapply;

    if (state.iapply.testControl.programs.length > 0) {
      // resuscitate from state
      const programs = testControl.programs.map(x => ({ id: x.id, label: x.title, source: TC }));
      dispatch({ type: SET_LANDING_MENU, content: { content: programs, context: TC } });

      // TODO: get back the last selected item as well.
    } else {
      // setting inital landing menus
      dispatch({ type: SET_LANDING_MENU, content: { content: [initialTestControlMenu], context: TC } });
    }
    // setting menus from state

    // setting option buttons
    dispatch({ type: SET_OPT_BTN_LAYOUT, content: TC_OPT_BTN_LAYOUT });

    // setting defaults for TC
    dispatch({ type: TC_APP_INITIALIZE });
  };
}

function saveTcProgram(name, desc) {
  return function(dispatch, getState) {
    const id = getId();
    // call add program
    const state = getState();
    dispatch({ type: TC_ADD_PROGRAM, content: { id, title: name, desc } });

    // call landing menu and set title.
    // if its the first dummy
    if (state.nav.landingMenu.selected.id === -1) {
      dispatch({ type: SET_LANDING_MENU, content: { content: [{ id, label: name, source: TC }], context: TC } });
    } else {
      dispatch({ type: ADD_LANDING_MENU, content: { id, label: name, source: TC } });
    }
  };
}

function deleteTcProgram() {
  return function(dispatch, getState) {
    const state = getState();
    const pIdx = state.iapply.testControl.programs.map(x => x.id).indexOf(state.iapply.testControl.activeProgram.id);
    const lIdx = state.nav.landingMenu.content.map(x => x.id).indexOf(state.iapply.testControl.activeProgram.id);

    dispatch({ type: TC_REMOVE_PROGRAM, idx: pIdx });
    // remove item from  landing menu as well
    dispatch({ type: REMOVE_LANDING_MENU, idx: lIdx });

    // reset landing menu to default
    if (state.nav.landingMenu.content.length === 1) {
      dispatch({ type: SET_LANDING_MENU, content: { content: [initialTestControlMenu], context: TC } });
    }

    dispatch({ type: TC_HIDE_DELETE_MODAL });
  };
}

module.exports = {
  setTestControlView,
  saveTcProgram,
  deleteTcProgram,
  initializeTc,
};
