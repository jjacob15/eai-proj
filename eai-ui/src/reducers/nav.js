/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import {
    TOGGLE_SIDEBAR, TOGGLE_HEADER_NAVBAR, SET_BROWSER_SIZE, SET_SELECTED_MENU,
} from '../constants/types';

const initialState = {
    isSmallDevice: false,
    headerMinimized: true,
    displaySideBar: true,
    sideBarMenu: {
        selected: null,
        menu: [{
            label: 'Enterprise Analytics Intelligence',
            content: [{
                id: 1,
                label: 'SyncReal',
                icon: 'home',
            }, {
                id: 2,
                label: 'About EAI',
                icon: 'shine',
            }, {
                id: 3,
                label: 'Videos',
                icon: 'video-clapper',
                expand: false,
                content: [{
                    id: 12,
                    label: 'Video 1',
                }, {
                    id: 13,
                    label: 'Video 2',
                }],
            }, {
                id: 4,
                label: 'Tutorials',
                icon: 'book',
                expand: false,
                content: [{
                    id: 15,
                    label: 'Tutorials 1',
                }, {
                    id: 16,
                    label: 'Tutorials 2',
                }],
            }],
        }, {
            label: 'Quick Links',
            content: [{
                id: 5,
                label: 'iExtract',
                icon: 'server',
            }, {
                id: 6,
                label: 'iModel',
                icon: 'settings',
            }, {
                id: 7,
                label: 'iApply',
                icon: 'bar-chart-alt',
            }, {
                id: 8,
                label: 'iPlan',
                icon: 'panel',
            }],
        }, {
            label: 'Support',
            content: [{
                id: 9,
                label: 'FAQs',
                icon: 'support',
            }, {
                id: 10,
                label: 'Help',
                icon: 'help',
            }, {
                id: 11,
                label: 'Contact Us',
                icon: 'email',
            }],
        }],
    },
};
export default (state = initialState, action) => {
    switch (action.type) {
    case SET_BROWSER_SIZE:
        return {
            ...state,
            isSmallDevice: action.size,
            headerMinimized: (action.size) ? true : state.headerMinimized,
            displaySideBar: !action.size,
        };
    case TOGGLE_HEADER_NAVBAR:
        return {
            ...state,
            headerMinimized: !state.headerMinimized,
        };
    case TOGGLE_SIDEBAR:
    {
        return {
            ...state,
            displaySideBar: !state.displaySideBar,
        };
    }
    case SET_SELECTED_MENU:
        if (action.item.content) {
            return {
                ...state,
                sideBarMenu: {
                    selected: null,
                    menu: state.sideBarMenu.menu.map(x => ({
                        ...x,
                        content: (x.content.map(c => ((c.id === action.item.id)
                            ? {
                                ...c,
                                expand: !c.expand,
                            } : {
                                ...c,
                                expand: false,
                            }))),
                    })),
                },
            };
        }
        return {
            ...state,
            sideBarMenu: {
                menu: state.sideBarMenu.menu.map(x => ({
                    ...x,
                    content: (x.content.map(c => ((c.id === action.item.id)
                        ? {
                            ...c
                        } : {
                            ...c,
                            expand: false,
                        }))),
                })),
                selected: action.item,
            },
        };


    default:
        return state;
    }
};
