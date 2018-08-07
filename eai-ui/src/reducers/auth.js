/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import { SET_USER } from '../constants/types';

export default (state = { user: 'Jaison Jacob' }, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};
