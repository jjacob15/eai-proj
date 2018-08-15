import React from 'react';
import cx from 'classnames';

const SubMenu = props => {
  const { item, onMenuSelected, menu } = props;

  const aStyle = curr =>
    cx({
      active:
        menu.selected &&
        (menu.selected.id === curr.id ||
          (curr.content && curr.content.filter(x => x.id === menu.selected.id).length > 0)),
    });

  return (
    <li className={aStyle(item)}>
      <a onClick={() => onMenuSelected(item)} onKeyPress={() => onMenuSelected(item)}>
        <span className="mtext">{item.label}</span>
      </a>
    </li>
  );
};

export default SubMenu;
