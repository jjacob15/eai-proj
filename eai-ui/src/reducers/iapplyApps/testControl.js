import {
  TC_SET_VIEW,
  TC_ADD_PROGRAM,
  TC_REMOVE_PROGRAM,
  TC_SET_ACTIVE_PROGRAM,
  TC_SHOW_DELETE_MODAL,
  TC_HIDE_DELETE_MODAL,
  TC_SET_PROGRAM_VIEW,
} from '../../constants/types';

const initialState = {
  initialInactive: true,
  view: null,
  program: {
    programs: [],
    activeProgram: -1,
  },
  showDeleteProgram: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TC_ADD_PROGRAM:
      return {
        ...state,
        program: {
          ...state.program,
          programs: [].concat(state.program.programs, action.content),
          activeProgram: action.content.id,
        },
        view: 'program',
        initialInactive: false,
      };
    case TC_SET_ACTIVE_PROGRAM:
      return {
        ...state,
        program: {
          ...state.program,
          activeProgram: action.content
        }
      };
    case TC_REMOVE_PROGRAM:
      if (state.program.programs.length === 1) {
        // set the dummy one
        return {
          ...state,
          program: {
            programs: [],
            activeProgram: -1,
          },
          view: null,
          initialInactive: true,
        };
      }

      const { programs } = state.program;
      const newProg = [
        ...programs.slice(0, action.idx),
        ...programs.slice(action.idx + 1, programs.length),
      ];
      return {
        ...state,
        program: {
          programs: newProg,
          activeProgram: newProg.length > 0 ? newProg[newProg.length - 1].id : null
        }
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
    case TC_SET_PROGRAM_VIEW:
      const updated = state.program.programs.map(p => {
        if (p.id === state.program.activeProgram) {
          return {
            ...p,
            view: action.content
          }
        }
        return p
      });

      return {
        ...state,
        program: {
          ...state.program,
          programs: updated
        }
      }
    default:
      return state;
  }
};
