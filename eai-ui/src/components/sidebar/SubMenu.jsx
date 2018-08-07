import React from 'react';
import cx from 'classnames';

const SubMenu = (props) => {
    const { item, onMenuSelected, sideBarMenu } = props;

    const aStyle = curr => cx({
        active: (sideBarMenu.selected
            && (sideBarMenu.selected.id === curr.id
                || (curr.content && curr.content.filter(x => x.id === sideBarMenu.selected.id).length > 0))),
    });

    return (
        <li className={ aStyle(item) }>
            <a
                onClick={ () => onMenuSelected(item) }
                onKeyPress={ () => onMenuSelected(item) }
            >
                <span className="mtext">
                    {item.label}
                </span>
            </a>
        </li>);
};

export default SubMenu;
