/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import { combineReducers } from 'redux';
import auth from './reducers/auth';
import nav from './reducers/nav';
import review from './reducers/review';

export default combineReducers({
  auth,
  nav,
  review,
});
