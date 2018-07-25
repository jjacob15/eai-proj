/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React from 'react';
import cx from 'classnames';
import TWEEN from '@tweenjs/tween.js';


class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'display',
            animating: false,
            height: '0px',
        };

        this.height = { x: 0 };
        this.show = this.show.bind(this);
        this.animate = this.animate.bind(this);
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

    render() {
        const { display, height, animating } = this.state;
        const { auth } = this.props;
        const c = cx({
            'nav-right': true,
            'nav-right-animate': animating,
        });
        return (<ul className={ c } style={ { display, height } }>
            <li className="">
                <a href="#!" className="displayChatbox">
                    <i className="ti-comments" />
                    <span className="badge bg-c-green" />
                </a>
            </li>
            <li className="user-profile header-notification">
                <a href="#!">
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
                <ul className="show-notification profile-notification" style={ { display: 'none' } }>
                    <li>
                        <a href="#!">
                            <i className="ti-settings" />
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="user-profile.html">
                            <i className="ti-user" />
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="email-inbox.html">
                            <i className="ti-email" />
                            My Messages
                        </a>
                    </li>
                    <li>
                        <a href="auth-lock-screen.html">
                            <i className="ti-lock" />
                            Lock Screen
                        </a>
                    </li>
                    <li>
                        <a href="auth-normal-sign-in.html">
                            <i className="ti-layout-sidebar-left" />
                            Logout
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        );
    }
}
export default NavRight;