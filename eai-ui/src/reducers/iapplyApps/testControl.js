import { TC_SET_VIEW } from '../../constants/types';

export default (state = { initialInactive: true, view: null }, action) => {
  switch (action.type) {
    case TC_SET_VIEW:
      return {
        ...state,
        view: action.content,
      };
    default:
      return state;
  }
};
