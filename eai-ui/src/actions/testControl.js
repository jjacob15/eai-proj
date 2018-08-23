import { TC_SET_VIEW } from '../constants/types';

function setTestControlView(view) {
  return function(dispatch) {
    dispatch({ type: TC_SET_VIEW, content: view });
  };
}
module.exports = { setTestControlView };
