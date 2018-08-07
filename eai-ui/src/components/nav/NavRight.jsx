/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React from 'react';
import cx from 'classnames';
import TWEEN from '@tweenjs/tween.js';
import ProfileMenu from './ProfileMenu';
import FullScreen from './FullScreen';

class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'display',
            animating: false,
            height: '0px',
            showMenu: false,
        };

        this.height = { x: 0 };
        this.show = this.show.bind(this);
        this.animate = this.animate.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        this.localReq = requestAnimationFrame(this.animate);
    }

    componentWillReceiveProps(next) {
        const { animating } = this.state;
        const { nav } = this.props;
        const { headerMinimized } = nav;
        if (animating) return;

        if (next.nav.headerMinimized !== headerMinimized) {
            this.toggle();
        } else {
            this.setState({
                display: (next.nav.isSmallDevice) ? 'none' : 'block',
            });
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.localReq);
    }

    animate(time) {
        this.localReq = requestAnimationFrame(this.animate);
        TWEEN.update(time);
    }


    toggle() {
        if (this.height.x === 0) {
            this.show();
            return;
        }

        this.hide();
    }

    show() {
        this.setState({
            animating: true,
            display: 'block',
        });

        new TWEEN.Tween(this.height)
            .to({ x: 56 }, 500)
            .easing(TWEEN.Easing.Quadratic.In)
            .onUpdate((object) => {
                this.setState({ height: `${object.x}px` });
            })
            .onComplete(() => {
                this.setState({
                    animating: false,
                });
                this.height = { x: 56 };
            })
            .start();
    }

    hide() {
        this.setState({
            animating: true,
        });

        new TWEEN.Tween(this.height)
            .to({ x: 0 }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate((object) => {
                this.setState({ height: `${object.x}px` });
            })
            .onComplete(() => {
                this.setState({
                    animating: false,
                    display: 'none',
                });
                this.height = { x: 0 };
            })
            .start();
    }

    toggleMenu() {
        this.setState(prev => ({
            showMenu: !prev.showMenu,
        }));
    }

    render() {
        const {
            display, height, animating, showMenu,
        } = this.state;
        const { auth, nav } = this.props;
        const c = cx({
            'nav-right': true,
            'nav-right-animate': animating,
        });
        const upStyle = cx({
            'user-profile header-notification': true,
            active: showMenu,
        });
        return (<ul className={ c } style={ { display, height } }>
            {(nav.isSmallDevice) ? null : <FullScreen />}
            <li className="" title="Notification">
                <a>
                    <i className="ti-bell" />
                    <span className="badge bg-c-pink" />
                </a>
            </li>
            <li className="" title="Chat">
                <a className="displayChatbox">
                    <i className="ti-comments" />
                    <span className="badge bg-c-green" />
                </a>
            </li>
            <li className={ upStyle } onClick={ this.toggleMenu } onKeyPress={ this.toggleMenu }>
                <a>
                    <img
                        alt="avatar"
                        src={ require('../../../assets/images/avatar-4.jpg') }
                        className="img-radius"
                    />
                    <span>
                        {auth.user}
                    </span>
                    <i className="ti-angle-down" />
                </a>
                <ProfileMenu show={ showMenu } />
            </li>
        </ul>
        );
    }
}
export default NavRight;
