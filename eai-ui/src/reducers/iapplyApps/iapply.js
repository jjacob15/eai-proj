import { combineReducers } from 'redux';
import { SET_APPLY_APP } from '../../constants/types';
import testControl from './testControl';

const initialState = {
  app: null,
};
const common = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLY_APP:
      return {
        ...state,
        app: action.app,
      };
    default:
      return state;
  }
};

export default combineReducers({
  common,
  testControl,
});
