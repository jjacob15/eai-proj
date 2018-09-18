import React from 'react';
import cx from 'classnames';
import Link from './Link';
import LinkWithChildren from './LinkWithChildren';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.props.handleClick(item);
  }
  render() {
    const { item, location, selectedSubMenuId } = this.props;

    const getStyle = curr =>
      cx({
        'selected active': curr.link === location,
      });

    let LinkObj;

    if (item.content) {
      LinkObj = <LinkWithChildren item={item} handleClick={this.handleClick} selectedSubMenuId={selectedSubMenuId} />;
    } else {
      LinkObj = <Link item={item} handleClick={this.handleClick} />;
    }
    return <li className={getStyle(item)}>{LinkObj}</li>;
  }
}

export default Menu;
