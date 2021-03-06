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
  TC_SET_PROGRAM_VIEW,
} from '../../constants/types';

import { getObjFromArr } from '../../util';
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
    const { programs } = testControl.program;

    if (programs.length > 0) {
      // resuscitate from state
      const p = programs.map(x => ({ id: x.id, label: x.title, source: TC }));
      dispatch({ type: SET_LANDING_MENU, content: { content: p, context: TC } });

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

function addTestControlProgram(name, desc) {
  return function(dispatch) {
    const id = getId();
    dispatch({ type: TC_ADD_PROGRAM, content: { id, title: name, desc, view: 'test' } });
  };
}

function deleteTcProgram() {
  return function(dispatch, getState) {
    const state = getState();
    const { programs, activeProgram } = state.review.test.program;

    const pIdx = programs.map(x => x.id).indexOf(activeProgram);
    // const lIdx = state.nav.landingMenu.content.map(x => x.id).indexOf(activeProgram);

    dispatch({ type: TC_REMOVE_PROGRAM, idx: pIdx });
    // // remove item from  landing menu as well
    // dispatch({ type: REMOVE_LANDING_MENU, idx: lIdx });

    // // reset landing menu to default and set to initial disabled state
    // if (state.nav.landingMenu.content.length === 1) {
    //   dispatch({ type: SET_LANDING_MENU, content: { content: [initialTestControlMenu], context: TC } });
    // }

    dispatch({ type: TC_HIDE_DELETE_MODAL });
  };
}

function setProgramView(view) {
  return function(dispatch, getState) {
    const state = getState();
    const { program } = state.iapply.testControl;

    // const active = program.programs.find(x => x.id === program.activeProgram);
    const active = getObjFromArr(program.programs, program.activeProgram);

    if (active && active.view === view) return function() {};

    dispatch({ type: TC_SET_PROGRAM_VIEW, content: view });
  };
}

module.exports = {
  setTestControlView,
  addTestControlProgram,
  deleteTcProgram,
  initializeTc,
  setProgramView,
};
