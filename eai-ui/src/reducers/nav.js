/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import {TOGGLE_SIDEBAR,TOGGLE_HEADER_NAVBAR,SET_BROWSER_SIZE,SET_SELECTED_MENU} from '../constants/types';

const initialState = {
    isSmallDevice: false, headerMinimized: true,
    displaySideBar: true,
    sideBarMenu: {
        selected: null,
        menu: [{
            label: 'Enterprise Analytics Intelligence',
            content: [{
                id: 1,
                label: 'Sync Real 15',
                icon: 'home'
            }, {
                id: 2,
                label: 'About EAi',
                icon: 'layout'
            }, {
                id: 3,
                label: 'Videos',
                icon: 'layout-cta-right',
                expand: false,
                content: [{
                    id: 12,
                    label: 'Video 1',
                }, {
                    id: 13,
                    label: 'Video 2',
                }]
            }, {
                id: 4,
                label: 'Tutorials',
                icon: 'view-grid',
                expand: false,
                content: [{
                    id: 15,
                    label: 'Tutorials 1',
                }, {
                    id: 16,
                    label: 'Tutorials 2',
                }]
            }]
        }, {
            label: 'Quick Links',
            content: [{
                id: 5,
                label: 'iExtract',
                icon: 'home'
            }, {
                id: 6,
                label: 'iModel',
                icon: 'layout'
            }, {
                id: 7,
                label: 'iApply',
                icon: 'layout-cta-right'
            }, {
                id: 8,
                label: 'iPlan',
                icon: 'view-grid'
            }]
        }, {
            label: 'Support',
            content: [{
                id: 9,
                label: 'FAQs',
                icon: 'home'
            }, {
                id: 10,
                label: 'Help',
                icon: 'layout'
            }, {
                id: 11,
                label: 'Contact Us',
                icon: 'view-grid'
            }]
        }]
    }
}
export default (state = initialState, action)=> {
    switch (action.type) {
        case SET_BROWSER_SIZE:
            return {
                ...state,
                isSmallDevice: action.size,
                headerMinimized: (action.size) ? true : state.headerMinimized,
                displaySideBar: !action.size
            }
        case TOGGLE_HEADER_NAVBAR:
            return {
                ...state,
                headerMinimized: !state.headerMinimized
            }
        case TOGGLE_SIDEBAR:
        {
            return {
                ...state,
                displaySideBar: !state.displaySideBar
            }
        }
        case SET_SELECTED_MENU:
            if (action.item.content) {
                return {
                    ...state,
                    sideBarMenu: {
                        selected: null,
                        menu: state.sideBarMenu.menu.map(x=>
                            ({
                                ...x,
                                content: (x.content.map(c=> ((c.id == action.item.id) ?
                                {
                                    ...c,
                                    expand: !c.expand
                                } : {
                                    ...c,
                                    expand: false
                                })))
                            })
                        )
                    }
                }
            } else {
                return {
                    ...state,
                    sideBarMenu: {
                        ...state.sideBarMenu,
                        selected: action.item
                    }
                }
            }

        default:
            return state;
    }
}