/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import { combineReducers } from 'redux';
import auth from './reducers/auth';
import nav from './reducers/nav';
import iapply from './reducers/iapply';

export default combineReducers({
  auth,
  nav,
  iapply
});
