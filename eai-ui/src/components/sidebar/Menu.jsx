import React from 'react';
import cx from 'classnames';
import Link from './Link';
import LinkWithChildren from './LinkWithChildren';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: 0
    }

    this.contractMenus = this.contractMenus.bind(this);
    this.setExpandedId = this.setExpandedId.bind(this);
  }

  setExpandedId(id){
    this.setState({
      expanded:id
    })
  }
  contractMenus() {
    this.setState({
      expanded: 0
    })
  }
  render() {
    const { item, location } = this.props;
    const { expanded } = this.state;

    const getStyle = curr =>
      cx({
        'selected active': curr.link === location
      });

    let LinkObj;

    if (item.content) {
      LinkObj = <LinkWithChildren item={item} handleClick={this.setExpandedId} expanded={expanded}/>
    } else {
      LinkObj = <Link item={item} handleClick={this.contractMenus}/>
    }
    return (
      <li className={getStyle(item)}>
        {LinkObj}
      </li>
    );
  }
};

export default Menu;
