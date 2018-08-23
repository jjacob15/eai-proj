import { SET_APPLY_APP } from '../constants/types';

export default (state = { app: null }, action) => {
    switch (action.type) {
        case SET_APPLY_APP:
            return {
                ...state,
                app: action.app
            }
        default:
            return state;
    }
}