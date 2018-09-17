import React, { Component, Fragment } from 'react';
import SubMenu from './SubMenu';
import cx from 'classnames';

class LinkWithChildren extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: this.manageExpand(props)
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubClick = this.handleSubClick.bind(this);
    }
    manageExpand(props) {
        console.log(props)
        return props.expanded === props.item.id;
    }
    handleSubClick(id) {
        this.props.handleSubClick(id)
    }
    handleClick() {
        this.props.handleClick(this.props.item.id)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            expand: this.manageExpand(nextProps)
        })
    }
    render() {
        const { item } = this.props;
        const { expand } = this.state;

        const caretStyle = curr =>
            cx({
                mcaret: curr.content,
                'mcaret-plus': curr.content && expand,
                'mcaret-minus': curr.content && expand,
            });

        const subMenuStyle = (curr) =>
            cx({
                'sub-menu': true,
                'sub-menu-visible': expand,
            });

        return (
            <Fragment>
                <a onClick={this.handleClick}>
                    <span className="micron">
                        <i className={`ti-${item.icon}`} />
                    </span>
                    <span className="mtext">{item.label}</span>
                    <span className={caretStyle(item)} />
                </a>
                {item.content && (
                    <ul className={subMenuStyle(item)}>
                        {item.content.map((sub, j) => (
                            <SubMenu item={sub} key={j} handleClick={this.handleClick} />
                        ))}
                    </ul>
                )}
            </Fragment>
        )

    }
}

module.exports = LinkWithChildren;