import {
  TC_SET_VIEW,
  TC_ADD_PROGRAM,
  TC_REMOVE_PROGRAM,
  TC_SET_ACTIVE_PROGRAM,
  TC_SHOW_DELETE_MODAL,
  TC_HIDE_DELETE_MODAL,
} from '../../constants/types';

const initialState = {
  initialInactive: true,
  view: null,
  programs: [],
  activeProgram: -1,
  showDeleteProgram: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TC_ADD_PROGRAM:
      return {
        ...state,
        programs: [].concat(state.programs, action.content),
        activeProgram: {
          id: action.content.id,
        },
        view: 'program',
        initialInactive: false,
      };
    case TC_SET_ACTIVE_PROGRAM:
      return {
        ...state,
        activeProgram: {
          id: action.content,
        },
      };
    case TC_REMOVE_PROGRAM:
      if (state.programs.length > 0) {
        const newProg = [
          ...state.programs.slice(0, action.idx),
          ...state.programs.slice(action.idx + 1, state.programs.length),
        ];
        return {
          ...state,
          programs: newProg,
          activeProgram: {
            id: newProg.length > 0 ? newProg[newProg.length - 1].id : null,
          },
        };
      }
      // set the dummy one
      return {
        ...state,
        programs: [],
        activeProgram: -1,
        initialInactive: true,
      };

    case TC_SHOW_DELETE_MODAL:
      return {
        ...state,
        showDeleteProgram: true,
      };
    case TC_HIDE_DELETE_MODAL:
      return {
        ...state,
        showDeleteProgram: false,
      };
    case TC_SET_VIEW:
      return {
        ...state,
        view: action.content,
      };
    default:
      return state;
  }
};
