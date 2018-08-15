import React from 'react';
import cx from 'classnames';
import SubMenu from './SubMenu';

const Menu = props => {
  const { item, onMenuSelected, menu } = props;
  const aStyle = curr =>
    cx({
      'selected active':
        menu.selected &&
        (menu.selected.id === curr.id ||
          (curr.content && curr.content.filter(x => x.id === menu.selected.id).length > 0)),
    });
  const caretStyle = curr =>
    cx({
      mcaret: curr.content,
      'mcaret-plus': curr.content && !curr.expand,
      'mcaret-minus': curr.content && curr.expand,
    });
  const subMenuStyle = curr =>
    cx({
      'sub-menu': true,
      'sub-menu-visible': curr.expand,
    });

  return (
    <li className={aStyle(item)}>
      <a onClick={() => onMenuSelected(item)} onKeyDown={() => onMenuSelected(item)}>
        <span className="micron">
          <i className={`ti-${item.icon}`} />
        </span>
        <span className="mtext">{item.label}</span>
        <span className={caretStyle(item)} />
      </a>
      {item.content && (
        <ul className={subMenuStyle(item)}>
          {item.content.map((sub, j) => (
            <SubMenu item={sub} key={j} onMenuSelected={onMenuSelected} menu={menu} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Menu;
