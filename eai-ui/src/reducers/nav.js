/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import {
  TOGGLE_SIDEBAR,
  TOGGLE_HEADER_NAVBAR,
  SET_BROWSER_SIZE,
  SET_SELECTED_MENU,
  TOGGLE_OPT_ICONS,
} from '../constants/types';
import menu from './menuContent';

const initialState = {
  isSmallDevice: false,
  headerMinimized: true,
  displaySideBar: true,
  displayOptionIcons: true,
  menu: {
    selected: {
      id: 5,
      label: 'iExtract',
      icon: 'server',
    },
    content: menu,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BROWSER_SIZE:
      return {
        ...state,
        isSmallDevice: action.size,
        headerMinimized: action.size ? true : state.headerMinimized,
        displaySideBar: !action.size,
      };
    case TOGGLE_HEADER_NAVBAR:
      return {
        ...state,
        headerMinimized: !state.headerMinimized,
      };
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        displaySideBar: !state.displaySideBar,
      };
    }
    case TOGGLE_OPT_ICONS: {
      return {
        ...state,
        displayOptionIcons: !state.displayOptionIcons,
      };
    }
    case SET_SELECTED_MENU:
      if (action.item.content) {
        return {
          ...state,
          menu: {
            ...state.menu,
            content: state.menu.content.map(x => ({
              ...x,
              content: x.content.map(
                c => (c.id === action.item.id
                    ? {
                        ...c,
                        expand: !c.expand,
                      }
                    : {
                        ...c,
                        expand: false,
                      })
              ),
            })),
          },
        };
      }
      return {
        ...state,
        menu: {
          selected: action.item,
          content: state.menu.content.map(x => ({
            ...x,
            content: x.content.map(
              c => (c.id === action.item.id || (action.item.parentId && action.item.parentId === c.id)
                  ? {
                      ...c,
                    }
                  : {
                      ...c,
                      expand: false,
                    })
            ),
          })),
        },
      };

    default:
      return state;
  }
};
