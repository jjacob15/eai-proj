/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { SET_SELECTED_MENU } from '../../constants/types';

const mapProps = disptach => ({
    onMenuSelected: (item) => {
        disptach({ type: SET_SELECTED_MENU, item });
    },
});

const SideBar = (props) => {
    const { nav, onMenuSelected } = props;
    const { displaySideBar, sideBarMenu } = nav;
    const c = cx({
        'side-bar': true,
        'side-bar-sm': !displaySideBar,
    });

    const aStyle = curr => cx({
        'selected active': (sideBarMenu.selected
            && (sideBarMenu.selected.id === curr.id
                || (curr.content && curr.content.filter(x => x.id === sideBarMenu.selected.id).length > 0))),
    });
    const caretStyle = curr => cx({
        mcaret: curr.content,
        'mcaret-plus': (curr.content && !curr.expand),
        'mcaret-minus': (curr.content && curr.expand),
    });
    const subMenuStyle = curr => cx({
        'sub-menu': true,
        'sub-menu-visible': curr.expand,
    });

    return (
        <nav className={ c }>
            <div className="main-menu">
                {sideBarMenu.menu.map(s => (
                    <div>
                        <div className="nav-label">
                            {s.label}
                        </div>
                        <ul className="left-item">
                            {s.content.map((item, i) => (
                                <li>
                                    <a
                                      className={ aStyle(item) }
                                      onClick={ () => onMenuSelected(item) }
                                      tabIndex={ i }
                                      onKeyDown={ () => onMenuSelected(item) }
                                    >

                                        <span className="micron">
                                            <i className={ `ti-${item.icon}` } />
                                        </span>
                                        <span className="mtext">
                                            {' '}
                                            {item.label}
                                        </span>
                                        <span className={ caretStyle(item) } />
                                    </a>
                                    {item.content && (
                                        <ul className={ subMenuStyle(item) }>
                                            {item.content.map((sub, j) => (
                                                <li>
                                                    <a
                                                      tabIndex={ j }
                                                      onClick={ () => onMenuSelected(sub) }
                                                      onKeyPress={ () => onMenuSelected(sub) }
                                                    >
                                                        <span>
                                                            {sub.label}
                                                        </span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default connect(() => ({}), mapProps)(SideBar);
