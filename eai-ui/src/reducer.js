/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import auth from './reducers/auth';
import nav from './reducers/nav';
import { combineReducers } from 'redux';

export default combineReducers({
    auth,
    nav
});
